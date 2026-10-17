import { html } from './AvrintComponent.js';
import './TestComponent.js';

export default {
  title: 'WebComponents/TestComponent',
  argTypes: {
    title: { control: 'text' },
  },
  tags: ["test"]
};

export const Default = {
  args: {
    title: "Default Title",
  },
  render: (args) => html`<test-component title=${args.title}></test-component>`,
};