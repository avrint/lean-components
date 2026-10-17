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
  render: (args) => html`
  <av-card>
        <av-gradient-text class="text-3xl mb-6">
          ${args.title}
        </av-gradient-text>
        <div
          class="border border-gray-200/80 py-3 px-2 flex gap-2 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
        >
          <av-gradient-text>
            <av-icon-button icon="home"></av-icon-button>
          </av-gradient-text>
          <av-icon-button icon="message" tooltip="Messages"></av-icon-button>
          <av-icon-button icon="message" tooltip="Messages 2"></av-icon-button>
          <av-icon-button icon="message" tooltip="Messages 3 3"></av-icon-button>
          <av-icon-button class="text-accent3-700" icon="friends" tooltip="User"></av-icon-button>
          <av-icon-button class="text-accent2-700" icon="settings" tooltip="Settings"></av-icon-button>
        </div>
      </av-card>
  `,
};