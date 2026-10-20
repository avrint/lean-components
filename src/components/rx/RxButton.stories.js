import { html, nothing } from '../AvrintComponent.js';
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
    variant: { 
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'danger', 'danger-soft'],
    },
    size: { 
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    text: { 
      control: 'html',
      description: 'Inner text content of the button'
    },
    onClick: { action: 'clicked', description: 'Triggered when the button is clicked' },
    fullWidth: {
      control: {type: 'boolean'}
    },
    isIconOnly: {
      control: {type: 'boolean'}
    }
  },
  tags: ["radix"]
};

const buttonTemplate = (args) => html`
  <rx-button 
    ?disabled=${args.disabled} 
    full-width=${args.fullWidth ? args.fullWidth : nothing}
    is-icon-only=${args.isIconOnly ? args.isIconOnly : nothing}
    type=${args.type ? args.type : nothing}
    size=${args.size ? args.size : nothing}
    variant=${args.variant ? args.variant : nothing}
    @click=${args.onClick}
  >
    ${args.text}
  </rx-button>
`;

export const Primary = {
  args: {
    disabled: false,
    type: null,
    text: 'Primary',
  },
  render: buttonTemplate,
};

export const Secondary = {
  args: {
    disabled: false,
    type: null,
    text: 'Secondary',
    variant: 'secondary',
  },
  render: buttonTemplate,
};

export const Tertiary = {
  args: {
    disabled: false,
    type: null,
    text: 'Tertiary',
    variant: 'tertiary',
  },
  render: buttonTemplate,
};

export const Warning = {
  args: {
    disabled: false,
    type: null,
    text: 'Warning',
    variant: 'danger',
  },
  render: buttonTemplate,
};

export const Danger = {
  args: {
    disabled: false,
    type: null,
    text: 'Danger',
    variant: 'danger',
  },
  render: buttonTemplate,
};

export const DangerSoft = {
  args: {
    disabled: false,
    type: null,
    text: 'Danger Soft',
    variant: 'danger-soft',
  },
  render: buttonTemplate,
};

export const Ghost = {
  args: {
    disabled: false,
    type: null,
    text: 'Ghost',
    variant: 'ghost',
  },
  render: buttonTemplate,
};

export const fullWidth = {
  args: {
    disabled: false,
    type: null,
    text: 'Full Width',
    fullWidth: true
  },
  render: buttonTemplate,
};

export const isIconOnly = {
  args: {
    disabled: false,
    type: null,
    text: html`<lean-icon name="home"> lkjdfd</lean-icon>`,
    isIconOnly: false
  },
  render: buttonTemplate,
};