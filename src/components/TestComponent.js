export class TestComponent extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  connectedCallback() {
    // 1. Render the HTML shell ONCE
    if (!this._initialized) {
      this.innerHTML = `
        <div style="padding: 1rem; border: 2px solid #62994b; border-radius: 8px; background: gray;">
          <h2 class="title"></h2>
          <p>Web Component loaded inside Storybook!</p>
        </div>
      `;

      // 2. Cache direct references to the nodes you need to update
      this._titleEl = this.querySelector('.title');
      this._initialized = true;
    }

    // 3. Set the initial text content from the attribute
    this._updateTitle(this.getAttribute('title'));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'title') {
      this._updateTitle(newValue);
    }
  }

  // Surgically update only the h2 text node
  _updateTitle(value) {
    if (this._titleEl) {
      this._titleEl.textContent = value || 'Default Title';
    }
  }
}

if (!customElements.get('test-component')) {
  customElements.define('test-component', TestComponent);
}