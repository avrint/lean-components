import { html } from 'lit';
import './RxAccordion.js';
 
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