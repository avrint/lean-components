import { BaseComponent } from "./AvrintComponent";

class TaskList extends BaseComponent {
  static get observedAttributes () {
    return ['list-title', 'button-text'];
  }

  static get observedEvents () {
    return ['click'];
  }
  
  constructor() {
    super();
    this.event("click", ".btn-add", (e, target) => {
      const task = document.createElement('div');
      task.className = 'p-2 border-b border-accent-200 text-sm bg-gray-200/20 rounded shadow-2xs';
      task.textContent = `Task #${Math.floor(Math.random() * 100)}`;
      this.appendChild(task);
    });
  }

  render () {
    const title = this.getAttribute('list-title') || "Tasks List";
    const buttonText = this.getAttribute('button-text') || "Add Tasks";

    return this.html`
      <div class="p-4 bg-accent-100 border border-accent-200 rounded shadow-sm w-64">
        <h2 class="font-bold text-lg border-b border-accent-200 mb-2">${title}</h2>
        
        <div class="task-area my-2 min-h-[40px] flex flex-col gap-2">
          <slot @slotchange="${this.handleSlotChange}"></slot>
        </div>

        <button class="btn-add cursor-pointer w-full py-1 bg-accent-500 text-accent-800 rounded text-xs font-semibold hover:bg-accent-600 transition-colors">
          ${buttonText}
        </button>
      </div>
    `;
  }
}

customElements.define('task-list', TaskList);