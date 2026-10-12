import { ReactiveElement } from '../ReactiveElement.js';

class RxButton extends ReactiveElement {
  static get observedAttributes() { return ['disabled', 'type']; }

  getInitialState() {
    return {
      disabled: false,
      type: 'button'
    };
  }

  attributeChanged(name, oldValue, newValue) {
    if (name === 'disabled') {
      this.state.disabled = this.hasAttribute('disabled');
    } else if (name === 'type') {
      this.state.type = newValue || 'button';
    }
  }

  connectedCallback() {
    if (!this.classList.contains('rt-Button')) {
      this.className = "rt-Button inline-block";
    }
    super.connectedCallback();
  }

  mounted() {
    // Intercept and block clicks on the host element during capture phase when disabled
    this.addEventListener('click', (e) => {
      if (this.state.disabled) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
    }, true);

    // Enable keyboard accessibility for Enter and Space keys
    this.addEventListener('keydown', (e) => {
      if (this.state.disabled) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }

  render() {
    let btn = this.querySelector('button');

    // 1. First-time initialization: Wrap existing light DOM content and inject internal native button
    if (!btn) {
      const contentContainer = document.createElement('span');
      while (this.firstChild) {
        contentContainer.appendChild(this.firstChild);
      }

      const fragment = this.html(`
        <button class="inline-flex items-center justify-center cursor-pointer select-none rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400 bg-accent-500 text-black hover:bg-accent-600 active:bg-accent-400 disabled:pointer-events-none disabled:opacity-50">
          <span class="data-content-slot"></span>
        </button>
      `);

      fragment.querySelector('.data-content-slot').appendChild(contentContainer);
      this.appendChild(fragment);
      btn = this.querySelector('button');
    }

    // 2. Synchronize state changes to the internal native button
    btn.setAttribute('type', this.state.type);
    if (this.state.disabled) {
      btn.setAttribute('disabled', '');
      btn.setAttribute('aria-disabled', 'true');
    } else {
      btn.removeAttribute('disabled');
      btn.removeAttribute('aria-disabled');
    }
  }
}

if (!customElements.get('rx-button')) {
  customElements.define('rx-button', RxButton);
}