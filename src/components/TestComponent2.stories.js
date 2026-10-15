import { html, nothing } from 'lit';
import './TestComponent2.js';

export default {
  title: 'WebComponents/TestComponent2',
  argTypes: {
    listTitle: { control: 'text' },
    buttonText: { control: 'text' },
  },
  tags: ["test"]
};

const render = (args) =>{
    return html`<task-list ?static=${args.static} button-text=${args.buttonText ? args.buttonText : nothing} list-title=${args.listTitle ? args.listTitle : nothing}></task-list>`;
  }

export const Default = {
  args: {
    listTitle: "",
    buttonText: "",
  },
  render: (args) => {
    return render(args);
  },
};

export const Static = {
  args: {
    listTitle: "Static Elem",
    buttonText: "AddTask",
  },
  render: (args) => {
    return render(args);
  },
};
