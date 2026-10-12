import { html } from 'lit';
import './TestComponent.js';

export default {
  title: 'WebComponents/TestComponent',
  argTypes: {
    title: { control: 'text' },
  },
  tags: ["kitchensink"]
};

export const Default = {
  args: {
    title: "Default Title",
  },
  render: (args) => html`<test-component title=${args.title}></test-component>`,
};