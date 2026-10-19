import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import leanIconsPlugin from './plugins/vite-plugin-lean-icons.js';

// Automatically discover all .html files inside src/
function getHtmlInputs(srcDir) {
  const files = readdirSync(srcDir, { recursive: true });
  const inputs = {};

  for (const file of files) {
    if (typeof file === 'string' && file.endsWith('.html')) {
      // Formats key names cleanly (e.g. 'index', 'pages2/index')
      const key = file.replace(/\.html$/, '').replace(/\\/g, '/');
      inputs[key] = resolve(srcDir, file);
    }
  }

  return inputs;
}

const srcDir = resolve(import.meta.dirname, 'src');

export default defineConfig({
  root: 'src',
  build: {
    
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      checks:{
        bundlerTimings: false
      },
      input: {
        ...getHtmlInputs(srcDir),
        // Dedicated entry point for your component library bundle/CSS
        components: resolve(import.meta.dirname, 'src/components/index.js'),
      },
      output: {
        // Ensure clean naming and structure for generated CSS and assets
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
    leanIconsPlugin(),
  ],
});