import  { html } from './AvrintComponent';

export default {
  title: 'WebComponents/Lean/Icon',
  argTypes: {
    icon: { control: 'text' },
  },
  tags: ["test"]
};

export const Single = {
  args: {
    icon: "settings",
  },
  render: (args) => html`
    <lean-icon name="${args.icon}" ></lean-icon>
  `,
};