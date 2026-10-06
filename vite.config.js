import { defineConfig } from 'vite';
import { resolve, relative } from 'node:path';
import { existsSync, readdirSync, statSync } from 'node:fs';

// Scan all HTML files inside src/ recursively
function getHtmlInputs(dir, baseDir = dir) {
  const inputs = {};
  if (!existsSync(dir)) return inputs;

  for (const file of readdirSync(dir)) {
    const fullPath = resolve(dir, file);
    if (statSync(fullPath).isDirectory()) {
      Object.assign(inputs, getHtmlInputs(fullPath, baseDir));
    } else if (file.endsWith('.html')) {
      const relPath = relative(baseDir, fullPath).replace(/\.html$/, '');
      inputs[relPath] = fullPath;
    }
  }
  return inputs;
}

const srcDir = resolve(process.cwd(), 'src');
const pagesDir = resolve(srcDir, 'pages');

export default defineConfig({
  root: process.cwd(),

  plugins: [
    {
      name: 'astro-like-routing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const [rawPath, query] = req.url.split('?');
          const queryString = query ? `?${query}` : '';

          if (rawPath.startsWith('/@') || rawPath.startsWith('/src/')) {
            return next();
          }

          const cleanPath = rawPath.replace(/^\//, '').replace(/\/$/, '');
          const exists = (filePath) => existsSync(filePath) && statSync(filePath).isFile();

          // Root route fallback (/ -> src/pages/index.html)
          if (cleanPath === '') {
            const rootIndex = resolve(pagesDir, 'index.html');
            if (exists(rootIndex)) {
              req.url = '/src/pages/index.html' + queryString;
              return next();
            }
          }

          // Search order for matching dev URLs to source files
          const candidates = [
            // 1. Direct file in src/ (e.g. /components/test.js -> src/components/test.js)
            resolve(srcDir, cleanPath),
            // 2. Folder in src/pages/ (e.g. /about -> src/pages/about/index.html)
            resolve(pagesDir, cleanPath, 'index.html'),
            // 3. Named page in src/pages/ (e.g. /about -> src/pages/about.html)
            resolve(pagesDir, `${cleanPath}.html`),
            // 4. Any top-level folder in src/ (e.g. /pages2 -> src/pages2/index.html)
            resolve(srcDir, cleanPath, 'index.html'),
            // 5. Any .html file in src/ (e.g. /pages2.html -> src/pages2.html)
            resolve(srcDir, `${cleanPath}.html`),
          ];

          for (const targetFile of candidates) {
            if (exists(targetFile)) {
              req.url = '/' + relative(process.cwd(), targetFile) + queryString;
              return next();
            }
          }

          next();
        });
      },
    },
    {
      name: 'flatten-html-output',
      enforce: 'post',
      generateBundle(options, bundle) {
        for (const key of Object.keys(bundle)) {
          const item = bundle[key];
          if (
            item.type === 'asset' &&
            item.fileName.endsWith('.html') &&
            key.startsWith('src/')
          ) {
            let destPath = item.fileName;

            // Strip src/pages/ prefix for main pages (src/pages/index.html -> dist/index.html)
            if (destPath.startsWith('src/pages/')) {
              destPath = destPath.replace(/^src\/pages\//, '');
            } else {
              // Strip src/ prefix for outer pages (src/pages2/index.html -> dist/pages2/index.html)
              destPath = destPath.replace(/^src\//, '');
            }

            this.emitFile({
              type: 'asset',
              fileName: destPath,
              source: item.source,
            });
            delete bundle[key];
          }
        }
      },
    },
  ],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(srcDir),
    },
  },
});