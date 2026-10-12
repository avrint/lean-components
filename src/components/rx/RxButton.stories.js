import { html } from 'lit';
import './RxButton.js';
 
export default {
  title: 'WebComponents/Radix/Button',
  argTypes: {
    disabled: { control: 'boolean' },
    type: { 
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'The native behavior type of the button'
    },
    text: { 
      control: 'text',
      description: 'Inner text content of the button'
    },
    onClick: { action: 'clicked', description: 'Triggered when the button is clicked' }
  },
  tags: ["radix"]
};

const buttonTemplate = (args) => html`
  <rx-button 
    ?disabled=${args.disabled} 
    type=${args.type}
    @click=${args.onClick}
  >
    ${args.text}
  </rx-button>
`;

export const Default = {
  args: {
    disabled: false,
    type: 'button',
    text: 'Button',
  },
  render: buttonTemplate,
};

export const Disabled = {
  args: {
    disabled: true,
    type: 'button',
    text: 'Disabled',
  },
  render: buttonTemplate,
};