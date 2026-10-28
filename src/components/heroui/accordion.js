import { BaseComponent } from '../AvrintComponent.js';

export class Accordion extends BaseComponent {
  static get observedAttributes () {
    return ['disabled', 'className', 'variant', 'size', 'type', 'full-width', 'is-icon-only'];
  }

  static get observedEvents () {
    return ['click', 'toggle'];
  }


  constructor() {
    super();
    this.openIndices = new Set();
    this.init = false;

    const details = this.querySelectorAll('details');
    this.init || details.forEach((detail, index) => {

      detail.classList.add("accordion__item");
      let summary = detail.querySelector('summary');
      summary.classList.add("accordion__trigger", "accordion__heading");
      detail.addEventListener("toggle", (event) => {
        const open = detail.open;
        const isSingle = this.hasAttribute('single');

        if (open) {
          if (isSingle) {
            this.openIndices.clear();
            this.openIndices.add(index);
            // Close all other details natively
            details.forEach((other, otherIdx) => {
              if (other !== detail && other.open) {
                other.open = false;
                this.openIndices.delete(otherIdx);
              }
            });
          } else {
            this.openIndices.add(index);
          }
        } else {
          this.openIndices.delete(index);
        }

        detail.setAttribute('data-state', open ? 'open' : 'closed');

        if (summary) {
          summary.setAttribute('aria-expanded', open);
          summary.setAttribute('data-expanded', open);
          const indicator = summary.querySelector('.accordion__indicator');
          if (indicator) {
            indicator.setAttribute('data-expanded', open);
          }
        }

      }, true);
      this.init = true;
    });
  }

  render () {
    const isDisabled = this.hasAttribute('disabled');
    const className = this.getAttribute('class') || this.getAttribute('className') || '';
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'md';
    const type = this.getAttribute('type') || 'button';

    const fullWidth = this.hasAttribute('full-width') ? 'button--full-width' : '';
    const isIconOnly = this.hasAttribute('is-icon-only') ? 'button--icon-only' : '';

    return this.html`
      <div 
        class="accordion accordion__body accordion--${variant} ${className}"
        type="${type}"
        ?disabled="${isDisabled}"
        aria-disabled="${isDisabled ? 'true' : 'false'}"
      >
        <slot ></slot>
      </div>
    `;
  }
}

Accordion.register('hu-accordion');