import type { Preview, StoryContext } from "@storybook/web-components-vite";
//@ts-expect-error
import './docs.css';
import React, { useEffect } from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';

let lastBg = "";

const applyThemeGlobals = (globals: any) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const { cssTheme, backgroundColor } = globals || {};

  if (cssTheme) {
    root.setAttribute('data-theme', cssTheme);
  } else {
    root.removeAttribute('data-theme');
  }

  if (backgroundColor && backgroundColor !== lastBg) {
    root.classList.add(`bg-${backgroundColor}`);
    if (lastBg !== "") {
      root.classList.remove(`bg-${lastBg}`);
    }
    lastBg = backgroundColor;
  }
};

const CustomDocsContainer = (props: any) => {
  const { context, children } = props;
  const currentGlobals = context?.store?.userGlobals?.globals || context?.globals || {};

  useEffect(() => {
    applyThemeGlobals(currentGlobals);
  }, [currentGlobals]);

  const bgClass = currentGlobals.backgroundColor ? `!bg-${currentGlobals.backgroundColor}` : '';

  //bg-neutral
  return React.createElement(
    DocsContainer,
    props,
    React.createElement(
      'div',
      {
        className: `!p-4 sb-unstyled text-accent-950 !${bgClass} sbdocs-layout-override`,
      },
      children
    )
  );
};

const preview: Preview = {
  decorators: [
    (story, context) => {
      applyThemeGlobals(context.globals);
      return story();
    },
  ],
  globalTypes: {
    cssTheme: {
      description: 'CSS Theme',
      toolbar: {
        icon: 'paintbrushalt',
        items: [
          { value: undefined, title: 'Default', type: 'reset' },
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'sepia', title: 'Sepia' },
          { value: 'cyberpunk', title: 'Cyberpunk' },
        ],
        dynamicTitle: true,
        preventDynamicIcon: false,
      },
    },
    backgroundColor: {
      name: 'Background',
      description: 'Switch background color',
      toolbar: {
        icon: 'photo',
        title: '',
        dynamicTitle: false,
        items: [
          { value: 'neutral-200', title: 'bg-neutral-200' },
          { value: 'black', title: 'bg-black' },
          { value: 'white', title: 'bg-white' },
          { value: 'slate-100', title: 'bg-slate-100' },
          { value: 'slate-800', title: 'bg-slate-800' },
          { value: 'gray-500', title: 'bg-gray-500' },
          { value: 'accent-600', title: 'bg-accent-600' },
        ],
      },
    },
  },
  initialGlobals: {
    backgroundColor: 'neutral-200',
  },
  parameters: {
    backgrounds: {
      options: []
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: CustomDocsContainer,
      codePanel: true,
      canvas: {
        sourceState: 'shown',
      },
      source: {
        type: 'dynamic',
        transform: (source: string, storyContext: StoryContext) => {
          const theme = storyContext?.globals?.cssTheme;
          const cleanSource = typeof source === 'string' ? source : '';

          return `
<html${theme ? ` data-theme="${theme}"` : ''}>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/style/main.css" />
</head>
<body>
  ${cleanSource}
  <script type="module" src="${storyContext?.parameters.fileName?.replace(".stories", "")}"></script>
</body>
</html>`;
        },
      },
    },
  },
};

export default preview;