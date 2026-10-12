import fs from 'fs';
import path from 'path';
import colors from 'tailwindcss/colors';

// 1. Your custom design system tokens
const customGroups = [
  {
    title: 'theme.color.greyscale',
    subtitle: 'Some of the greys',
    colors: { White: '#FFFFFF', Alabaster: '#F8F8F8', Concrete: '#F3F3F3' },
  },
  {
    title: 'theme.color.primary',
    subtitle: 'Coral',
    colors: { WildWatermelon: '#FF4785' },
  },
  {
    title: 'theme.color.secondary',
    subtitle: 'Ocean',
    colors: { DodgerBlue: '#1EA7FD' },
  },
  {
    title: 'theme.color.positive',
    subtitle: 'Green',
    colors: {
      Apple: 'rgba(102,191,60,1)',
      Apple80: 'rgba(102,191,60,.8)',
      Apple60: 'rgba(102,191,60,.6)',
      Apple30: 'rgba(102,191,60,.3)',
    },
  },
  {
    title: 'gradient',
    subtitle: 'Grayscale',
    colors: { Gradient: 'linear-gradient(to right,white,black)' },
  },
];

// 2. Automatically map all native Tailwind color scales
const tailwindGroups = Object.entries(colors)
  .filter(([_, value]) => typeof value === 'object' && value !== null)
  .map(([name, value]) => ({
    title: `theme.color.${name}`,
    subtitle: name.charAt(0).toUpperCase() + name.slice(1),
    colors: value,
  }));

const allGroups = [...customGroups, ...tailwindGroups];

// 3. Generate pre-rendered HTML structure
const groupsHtml = allGroups.map(group => {
  const swatchesHtml = Object.entries(group.colors)
    .map(([shade, hex]) => `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div style="background: ${hex}; height: 44px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.08);"></div>
        <div style="display: flex; justify-content: space-between; font-size: 11px; font-family: monospace;">
          <span style="font-weight: 600; color: #333;">${shade}</span>
          <span style="color: #666; font-size: 10px;">${hex}</span>
        </div>
      </div>
    `).join('');

  return `
    <div style="margin-bottom: 36px; font-family: system-ui, sans-serif;">
      <div style="margin-bottom: 12px;">
        <h3 style="margin: 0; font-size: 14px; font-weight: 700; color: #111;">${group.title}</h3>
        <p style="margin: 2px 0 0 0; font-size: 12px; color: #666;">${group.subtitle}</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px;">
        ${swatchesHtml}
      </div>
    </div>
  `;
}).join('\n');

const fileContent = `import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    options: { showPanel: false },
  },
};

export default meta;

export const AllColors: StoryObj = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '32px';
    container.style.maxWidth = '1100px';
    container.style.backgroundColor = '#ffffff';
    container.innerHTML = \`${groupsHtml}\`;
    return container;
  },
};
`;

const outputPath = path.resolve('src/components/Colors.stories.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log('✅ src/Colors.stories.ts generated successfully!');