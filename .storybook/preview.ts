import type { Preview, StoryContext } from "@storybook/web-components";
//@ts-expect-error
import '../src/style/main.css';
import '../src/components/ReactiveElement.js'

import { html, nothing } from 'lit';

let lastBg = "";
const preview: Preview = {
  decorators: [
    (story, context) => {
      const root = document.documentElement;
      const { cssTheme, backgroundColor } = context.globals;
      // console.info(backgroundColor, story, context);

      if (cssTheme) {
        root.setAttribute('data-theme', cssTheme);
      } else {
        // Handles the "Clear" menu option by removing the attribute entirely
        root.removeAttribute('data-theme');
      }
      console.info(backgroundColor);
      if (backgroundColor != "" && backgroundColor !== lastBg) {
        root.classList.add(`bg-${backgroundColor}`)
        if (lastBg !== "") {
          root.classList.remove(`bg-${lastBg}`)
        }
        lastBg = backgroundColor;
      }

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
        // bg-[#ffffff] bg-[#000000] bg-[#1b1c1d]
        items: [
          { value: '[#1b1c1d]', title: 'bg-neutral' },
          { value: '[#000000]', title: 'bg-black' },
          { value: '[#ffffff]', title: 'bg-white' },
          { value: 'slate-100', title: 'bg-slate-100'  },
          { value: 'slate-800', title: 'bg-slate-800'},
          { value: 'gray-500', title: 'bg-gray-500'},
          { value: 'accent-600', title: 'bg-accent-600' },
        ],
      },
    },
  },
  initialGlobals: {
    background: '#000000',
    backgroundColor: '[#1b1c1d]',
  },
  parameters: {
    backgrounds: {
      // 2. Define or override options using key-value objects
      options: [
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
      canvas: {
        sourceState: 'shown',
      },
      source: {
        type: 'dynamic',
        transform: (source: string, storyContext: StoryContext) => {
          // console.info(storyContext)
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
  <script type="module" src="${storyContext?.parameters.fileName.replace(".stories", "")}"></script>

</body>
</html>`;
        },
      },
    },
  },
};

export default preview;