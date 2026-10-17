import { BaseComponent } from '../AvrintComponent.js';

export class RxButton extends BaseComponent {
  static get observedAttributes () {
    return ['disabled'];
  }
  
  constructor() {
    super();
    this.openIndices = new Set();

    this.event('click', 'rx-button', (e, target) => {
      if (this.hasAttribute('disabled')) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, true);

    this.event('keydown', 'rx-button', (e, target) => {
      if (this.hasAttribute('disabled')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }

  render() {
    const isDisabled = this.hasAttribute('disabled');
    const type = this.hasAttribute('type') || 'button';
    return this.html`
      <button 
        class="rt-Button inline-flex items-center justify-center cursor-pointer select-none rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 bg-accent-500 text-black hover:bg-accent-600 active:bg-accent-400 disabled:pointer-events-none disabled:opacity-50"
        type="${type}"
        ?disabled="${isDisabled}"
        aria-disabled="${isDisabled ? 'true' : 'false'}"
      >
        <slot></slot>
      </button>
    `;
  }
}

RxButton.register('rx-button');
