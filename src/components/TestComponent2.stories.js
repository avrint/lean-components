import { html } from 'lit';
import './TestComponent2.js';

export default {
  title: 'WebComponents/TestComponent2',
  argTypes: {
    title: { control: 'text' },
    buttonText: { control: 'text' },
  },
  tags: ["test"]
};

export const Default = {
  args: {
    title: "Default Title",
    buttonText: "AddTask",
    static: false
  },
  render: (args) => {
    return html`
    <task-list id="staticList" ?static=${args.static} button-text=${args.buttonText} .title=${args.title}></task-list>
    `;
  },
};


export const Static = {
  args: {
    title: "Static Elem",
    buttonText: "AddTask",
    static: true
  },
  render: (args) => {
    return html`
    <task-list id="staticList" ?static=${args.static} button-text=${args.buttonText} .title=${args.title}></task-list>
    `;
  },
};
