import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    "@storybook/addon-docs"
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '/components': '/src/components',
          '/style': '/src/style',
        },
      },
      plugins: [
        tailwindcss()
      ],
      // 🚀 This tells Vite to ignore Storybook's internal subpaths during pre-bundling
      optimizeDeps: {
        ...config.optimizeDeps,
        exclude: [
          ...(config.optimizeDeps?.exclude || []),
          'storybook',
          '@storybook/blocks',
          '@storybook/addon-docs',
          '@storybook/theming'
        ],
      },
    });
  },
};

export default config;