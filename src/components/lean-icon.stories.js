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
    icon: "hi2-rocket-launch",
  },
  render: (args) => html`
    <lean-icon name="${args.icon}" ></lean-icon>
  `,
};