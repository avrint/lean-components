import { BaseComponent } from "./AvrintComponent";

class TaskList extends BaseComponent {
  static get attributeSelectors () {
    return {
      'title': '.t-title',
      'button-text': '.btn-add'
    };
  }

  render () {
    const title = this.getAttribute('title') || "Tasks List";
    const buttonText = this.getAttribute('button-text') || "Add Tasks";

    return this.html`
      <div class="p-4 bg-accent-50 border border-accent-200 rounded shadow-sm w-64">
        <h2 class="t-title font-bold text-lg border-b border-accent-200 mb-2">${title}</h2>
        <div class="task-area my-2 min-h-[40px]"></div>
        <button class="btn-add cursor-pointer w-full py-1 bg-accent-500 text-accent-800 rounded text-xs">${buttonText}</button>
      </div>
    `;
  }

  static get observedEvents () {
    return ['click'];
  }

  handleEvent (e) {
    if (e.type === "click" && e.target.closest('.btn-add')) {
      const task = document.createElement('div');
      task.className = 'p-2 border-b border-accent-200 text-sm';
      task.textContent = `Task #${Math.floor(Math.random() * 100)}`;
      this.querySelector('.task-area').appendChild(task);
    }
  }
}

customElements.define('task-list', TaskList);