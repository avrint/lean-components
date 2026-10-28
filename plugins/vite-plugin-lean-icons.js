import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { generateFonts } from 'fantasticon';
import crypto from 'crypto';

const masterDir = path.resolve('src/icons');
const defaultOutputDir = path.resolve('src/assets/fonts');
const cacheMetaPath = path.resolve('.tmp/icons/.cache-meta.json');

/**
 * Calculates a unique hash representing the current state of all master SVGs.
 */
async function getIconsHash(allMasterSvgs) {
  const hash = crypto.createHash('md5');
  
  for (const svgPath of allMasterSvgs) {
    const stats = await fs.stat(svgPath);
    // Include path, file size, and last modified time in the hash calculation
    hash.update(`${svgPath}:${stats.size}:${stats.mtimeMs}`);
  }
  
  return hash.digest('hex');
}

async function generateFullFont(outputDir) {
  await fs.ensureDir(outputDir);

  const allMasterSvgs = await glob('src/icons/**/*.svg', { absolute: true });
  allMasterSvgs.sort();

  // 1. Check if source icons have changed
  const currentHash = await getIconsHash(allMasterSvgs);
  let cachedHash = null;

  if (await fs.pathExists(cacheMetaPath)) {
    try {
      const meta = await fs.readJson(cacheMetaPath);
      cachedHash = meta.hash;
    } catch (e) {
      // Ignore read errors, proceed with generation
    }
  }

  // Also verify that the actual output font files exist
  const fontFileExists = await fs.pathExists(path.join(outputDir, 'app-icons.woff2'));

  if (currentHash === cachedHash && fontFileExists) {
    console.log('⚡ [lean-icons] Source icons unchanged. Skipping full icon font generation.');
    return;
  }

  console.log('✨ [lean-icons] Generating full icon font asynchronously...');

  const codepoints = {};
  let currentCodePoint = 0xe000;

  for (const svgPath of allMasterSvgs) {
    const relativePath = path.relative(masterDir, svgPath);
    const ext = path.extname(relativePath);
    const slug = relativePath.slice(0, -ext.length).split(path.sep).join('-');
    codepoints[slug] = currentCodePoint;
    currentCodePoint++;
  }

  // Await generation safely
  await generateFonts({
    inputDir: masterDir,
    outputDir: outputDir,
    fontTypes: ["woff2", "woff"],
    assetTypes: ['css', 'json'],
    name: 'app-icons',
    normalize: true,
    codepoints
  });

  // Save the new hash to cache meta
  await fs.ensureDir(path.dirname(cacheMetaPath));
  await fs.writeJson(cacheMetaPath, { hash: currentHash });
  
  console.log('✨ [lean-icons] Full icon font generated successfully.');
}

async function optimizeFontFromDist(distDir, finalOutputDir) {
  const tempDir = path.resolve('.tmp/icons');
  await fs.emptyDir(tempDir);

  // 1. Build a slug map of all master SVGs
  const allMasterSvgs = await glob('src/icons/**/*.svg', { absolute: true });
  allMasterSvgs.sort();

  const iconMap = new Map();
  const globalCodepoints = {};
  let currentCodePoint = 0xe000;

  // Build master codepoint map to ensure absolute consistency
  for (const svgPath of allMasterSvgs) {
    const relativePath = path.relative(masterDir, svgPath);
    const ext = path.extname(relativePath);
    const slug = relativePath.slice(0, -ext.length).split(path.sep).join('-');
    
    globalCodepoints[slug] = currentCodePoint;
    currentCodePoint++;
    
    iconMap.set(slug, svgPath);
  }

  // 2. Scan all bundled files in `dist` for any matching icon slugs
  const distFiles = await glob(`${distDir}/**/index*.{js,mjs}`, { absolute: true });
  const usedIcons = new Set();

  for (const file of distFiles) {
    const content = await fs.readFile(file, 'utf-8');
    for (const slug of iconMap.keys()) {
      const match = new RegExp(`["'](${slug})["']`, "g").test(content);
      if (match) {
        usedIcons.add(slug);
      }
    }
  }

  // Fallback safety if none detected
  if (usedIcons.size === 0 && iconMap.size > 0) {
    usedIcons.add(iconMap.keys().next().value);
  }

  // 3. Copy matched SVGs to temp folder preserving subfolder structure
  let copiedCount = 0;
  for (const iconName of usedIcons) {
    const svgPath = iconMap.get(iconName);
    if (svgPath && (await fs.pathExists(svgPath))) {
      const relPath = path.relative(masterDir, svgPath);
      const destPath = path.join(tempDir, relPath);
      await fs.ensureDir(path.dirname(destPath));
      await fs.copy(svgPath, destPath);
      copiedCount++;
    }
  }

  // 4. Generate the lean production font using the GLOBAL deterministic codepoints
  if (copiedCount > 0) {
    await fs.emptyDir(finalOutputDir);
    
    await generateFonts({
      inputDir: tempDir,
      outputDir: finalOutputDir,
      fontTypes: ["woff2", "woff"],
      assetTypes: ['css', 'json'],
      name: 'app-icons',
      normalize: true,
      codepoints: globalCodepoints
    });

    // Find Vite's hashed font files in dist/assets
    const hashedWoff2Files = await glob(`${distDir}/assets/app-icons-*.woff2`, { absolute: true });
    const hashedWoffFiles = await glob(`${distDir}/assets/app-icons-*.woff`, { absolute: true });

    // Override hashed woff2
    if (hashedWoff2Files.length > 0) {
      const optimizedWoff2 = path.join(finalOutputDir, 'app-icons.woff2');
      if (await fs.pathExists(optimizedWoff2)) {
        await fs.copy(optimizedWoff2, hashedWoff2Files[0], { overwrite: true });
      }
    }
      
    // Override hashed woff
    if (hashedWoffFiles.length > 0) {
      const optimizedWoff = path.join(finalOutputDir, 'app-icons.woff');
      if (await fs.pathExists(optimizedWoff)) {
        await fs.copy(optimizedWoff, hashedWoffFiles[0], { overwrite: true });
      }
    }

    // Clean up temporary assets folder if desired
    await fs.remove(finalOutputDir);
    await fs.remove(tempDir);

    console.log(`🚀 [lean-icons] Successfully optimized production font in dist with ${copiedCount} icons.`);
  }
}

export default function leanIconsPlugin() {
  let viteCommand = 'serve';
  let hasRunFull = false;
  let hasRun = false;

  return {
    name: 'vite-plugin-lean-icons',
    configResolved(resolvedConfig) {
      viteCommand = resolvedConfig.command;
    },
    async buildStart() {
      if ((viteCommand === 'serve') && !hasRunFull) {
        hasRunFull = true;
        await generateFullFont(defaultOutputDir);
      }
    },
    async closeBundle() {
      if (viteCommand === 'build' && !hasRun) {
        hasRun = true;
        const distDir = path.resolve('dist');
        const finalOutputDir = path.resolve('dist/assets/fonts');
        await optimizeFontFromDist(distDir, finalOutputDir);
      }
    },
    configureServer(server) {
      server.watcher.on('add', async (filePath) => {
        if (filePath.includes('src/icons/')) {
          // Invalidate cache or let generateFullFont check hashes
          await generateFullFont(defaultOutputDir);
          server.ws.send({ type: 'full-reload' });
        }
      });
      server.watcher.on('unlink', async (filePath) => {
        if (filePath.includes('src/icons/')) {
          await generateFullFont(defaultOutputDir);
          server.ws.send({ type: 'full-reload' });
        }
      });
      server.watcher.on('change', async (filePath) => {
        if (filePath.includes('src/icons/')) {
          await generateFullFont(defaultOutputDir);
          server.ws.send({ type: 'full-reload' });
        }
      });
    }
  };
}