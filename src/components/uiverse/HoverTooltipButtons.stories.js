import { html } from '../AvrintComponent';
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
    title: "<av-icon></av-icon>",
  },
  render: (args) => html`
  <av-card class="text-3xl">

        <av-gradient-text class="text-4xl mb-2">
          Lean Icons
        </av-gradient-text>
        <av-gradient-text className="text-sm mb-6 !via-accent3-400 !to-accent2-400">
          ${args.title}
        </av-gradient-text>
        <div
          class="w-full border border-gray-200/80 py-3 px-2 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 items-center gap-2"
        >
          
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <av-icon-button icon="home"></av-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button tooltip="Messages"></av-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">

          <av-icon-button icon="rx-arrow-up" tooltip="Messages 2"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button icon="rx-stack" tooltip="rx-stack"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button class="text-accent3-700" icon="friends" tooltip="User"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button class="text-accent2-700 " icon="rx-gear" tooltip="Settings"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button icon="message" tooltip="Messages"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button icon="rx-arrow-up" tooltip="Messages 2"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button icon="rx-stack" tooltip="rx-stack"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button class="text-accent3-700" icon="friends" tooltip="User"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button class="text-orange " icon="rx-rocket" tooltip="rx-rocket"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button icon="message" tooltip="Messages"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button icon="rx-arrow-up" tooltip="Messages 2"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button icon="rx-shadow-inner" tooltip="rx-shadow-inner"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button class="text-accent3-700" icon="rx-shadow-outer" tooltip="rx-shadow-outer"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
          <av-icon-button class="text-accent2-700 " icon="rx-gear" tooltip="rx-gear"></av-icon-button>
          </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        </div>
      </av-card>
  `,
};