import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    "@storybook/addon-docs",
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          { find: '/components', replacement: '/src/components' },
          { find: '/style', replacement: '/src/style' },
          // 🚀 Redirect the broken CJS shim straight to React's native ESM export
        ],
      },
      // 🚀 This tells Vite to ignore Storybook's internal subpaths during pre-bundling
      optimizeDeps: {
        ...config.optimizeDeps,

        exclude: [
          ...(config.optimizeDeps?.exclude || []),

        ],
      },
    });
  },
};

export default config;