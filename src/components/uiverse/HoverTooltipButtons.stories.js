import { html } from 'lit';
import './HoverTooltipButtons';

export default {
  title: 'WebComponents/HoverTooltipButtons',
  argTypes: {
    title: { control: 'text' },
  },
  tags: ["test"]
};

export const Default = {
  args: {
    title: "Default Title",
  },
  render: (args) => html`<hover-menu menu-title=${args.title}></hover-menu>`,
};