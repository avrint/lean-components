import { html } from '../AvrintComponent.js';
import './RxAccordion.js';
import '../buttons/lean-icon-button.js';
import { AvCard} from "../uiverse/HoverTooltipButtons.js"

export default {
  title: 'WebComponents/Radix/Accordion',
  argTypes: {
    single: { control: 'boolean' },
    entries: { 
      control: 'object',
      description: 'Array of accordion entries with summary and details'
    },
  },
  tags: ["radix"]
};

const accordion = (args) => html`<rx-accordion ?single=${args.single}>
    ${(args.entries || []).map(
      (entry) => html`
      <section title="${entry.summary}">
          ${entry.details}
      </section>
      `
    )}
  </rx-accordion>`;

export const Default = {
  args: {
    single: false,
    entries: [
      { summary: 'Summary 1', details: 'Details 1' },
      { summary: 'Summary 2', details: 'Details 2' },
    ],
  },
  render: accordion,
};

export const SingleSelection = {
  args: {
    single: true,
    entries: [
      { summary: 'Summary 1', details: 'Details 1' },
      { summary: 'Summary 2', details: 'Details 2' },
    ],
  },
  render: accordion,
};

export const Section = {
  args: {
    single: false,
    entries: [
      { summary: '➀ Notification', details: 'Some Complex UI' },
    ],
  },
  render: (args) => html`<rx-accordion ?single=${args.single}>
    ${(args.entries || []).map(
      (entry) => html`
      <section title="${entry.summary}">
          <lean-card class="">
            ${entry.details}
          </lean-card>
      </section>
      `
    )}
  </rx-accordion>
  <br/>
  <rx-accordion ?single=${args.single} >
    ${(args.entries || []).map(
      (entry) => html`
      <section title="${entry.summary}" expanded>
          <lean-card class="">
          
          ${entry.details}
          <div
          class="w-full border border-gray-200/80 py-3 px-2 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 items-center gap-2"
        >
          
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="home"></lean-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="home"></lean-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="settings" tooltip="settings"></lean-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="home" tooltip="home"></lean-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="home" tooltip="home"></lean-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="home" tooltip="home"></lean-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="home" tooltip="home"></lean-icon-button>
        </div>
        <div className="grid gap-1.5 sm:gap-4 grid-flow-col auto-cols-fr">
        <lean-icon-button icon="home"></lean-icon-button>
        </div>
        
        </div>
          </lean-card>
      </section>
      `
    )}
  </rx-accordion>`,
};