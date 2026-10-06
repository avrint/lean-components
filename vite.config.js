import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';

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
      input: getHtmlInputs(srcDir),
    },
  },
});