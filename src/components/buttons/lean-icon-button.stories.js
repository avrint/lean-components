import { html } from '../AvrintComponent';
import './lean-icon-button';

export default {
  title: 'WebComponents/Lean/Icon Button',
  argTypes: {
    tooltip: { control: 'text' },
  },
  tags: ["test"]
};

export const Default = {
  args: {
    tooltip: "settings",
  },
  render: (args) => html`
  <div className="grid gap-1 sm:gap-2 grid-flow-col auto-cols-fr">
    <lean-icon-button className="!text-3xl !p-4" icon="settings" tooltip=${args.tooltip}></lean-icon-button>
    </div>
  `,
};