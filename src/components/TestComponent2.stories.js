import { html, nothing } from 'lit';
import './TestComponent2.js';

export default {
  title: 'WebComponents/TestComponent2',
  argTypes: {
    title: { control: 'text' },
    buttonText: { control: 'text' },
  },
  tags: ["test"]
};

const render = (args) =>{
    return html`<task-list ?static=${args.static} button-text=${args.buttonText ? args.buttonText : nothing} .title=${args.title ? args.title : nothing}></task-list>`;
  }

export const Default = {
  args: {
    title: "",
    buttonText: "",
  },
  render: (args) => {
    return render(args);
  },
};

export const Static = {
  args: {
    title: "Static Elem",
    buttonText: "AddTask",
  },
  render: (args) => {
    return render(args);
  },
};
