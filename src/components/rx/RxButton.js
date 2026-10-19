import { BaseComponent } from '../AvrintComponent.js';

export class RxButton extends BaseComponent {
  static get observedAttributes() {
    return ['disabled', 'className', 'variant', 'size', 'type'];
  }

  static get observedEvents() {
    return ['click', 'keydown'];
  }
  
  constructor() {
    super();

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
    const className = this.getAttribute('class') || this.getAttribute('className') || '';
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'md';
    const type = this.getAttribute('type') || 'button';
    
    const fullWidth = this.hasAttribute('full-width') ? 'button--full-width' : '';
    const isIconOnly = this.hasAttribute('is-icon-only') ? 'button--icon-only' : '';

    return this.html`
      <button 
        class="button button--${variant} button--${size} ${fullWidth} ${isIconOnly} ${className}"
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