import { html, render, nothing } from 'lit-html';

export { html, render, nothing };


// --- TailwindCSS INTEGRATION ---
import tailwindCssString from '../style/components.css?inline';
const tailwindStyles = new CSSStyleSheet();
tailwindStyles.replaceSync(tailwindCssString);

// --- icon-font INTEGRATION ---
import iconMap from '../assets/fonts/app-icons.json';

export const AppIcons = Object.freeze(
  Object.keys(iconMap).reduce((acc, key) => {
    const enumKey = key.charAt(0).toLowerCase() + key.slice(1);
    acc[enumKey] = key;
    return acc;
  }, {})
);

export class BaseComponent extends HTMLElement {

  html = html;

  
  /**
   * Registers the custom element. 
   * Defers definition until DOM is loaded if necessary, firing only once.
   * @param {string} [elemName] Optional custom element tag name
   */
  static register (elemName) {
    const name = elemName || this.elementName;
    if (!name) return this;

    const defineElement = () => {
      if (!customElements.get(name)) {
        customElements.define(name, this);
      }
    };

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', defineElement, { once: true });
    } else {
      defineElement();
    }

    return this;
  }

  static get observedEvents () {
    return [];
  }

  static get observedAttributes () {
    return [];
  }

  attributeChangedCallback (_name, oldVal, newVal) {
    if (oldVal === newVal) return;
    // console.info("attributeChangedCallback", _name, oldVal, newVal);
    this._render();
  }

  constructor() {
    super();
    // 1. Enable Shadow DOM encapsulation
    this.attachShadow({ mode: 'open' });

    // 2. Adopt Tailwind styles automatically if configured
    if (typeof tailwindStyles !== 'undefined') {
      this.shadowRoot.adoptedStyleSheets = [tailwindStyles];
    }

    // Flag to prevent recursive rendering loops from mutation observers
    this._isRendering = false;
  }

  _listen (type) {
    this.addEventListener(type, this);
  }

  _render () {
    if (this._isRendering) return;
    if (typeof this.render === 'function') {
      try {
        this._isRendering = true;
        render(this.render(), this.shadowRoot);
      } finally {
        this._isRendering = false;
      }
    }
  }

  connectedCallback () {
    this.constructor.observedEvents.forEach((event) => {
      this.addEventListener(event, this);
    });

    // Scoped strictly to childList changes for light DOM content projection
    this._observer = new MutationObserver((mutations) => {
      if (this._isRendering) return;
      const shouldRender = mutations.some(mutation => {
        if (mutation.type === 'childList') return true;
        if (mutation.target !== this && mutation.attributeName !== 'slot' && mutation.type === 'attributes') return true;
        return false;
      });
      if (shouldRender) {
        this._render();
      }
    });

    this._observer.observe(this, { childList: true, subtree: true, attributes: true });

    this._render();
  }

  disconnectedCallback () {
    this._observer?.disconnect();
  }

  /**
   * Native slot change handler bound via arrow function to preserve component context.
   */
  handleSlotChange = () => {
    this._render();
  };

  /**
   * Registers a delegated event handler for the component.
   * Can be called multiple times in the subclass constructor.
   * 
   * @param {string} type The event type (e.g., 'click')
   * @param {string} selector The CSS selector to match against
   * @param {Function} callback The handler function: (e, target) => {}
   */
  event (type, selector, callback, t) {
    if (!this._eventHandlers) {
      this._eventHandlers = [];
    }
    this._eventHandlers.push({ type, selector, callback, t });

    if (!this._listenedEventTypes) {
      this._listenedEventTypes = new Set();
    }

    // Automatically add the event listener to the host if not already listening
    if (!this._listenedEventTypes.has(type)) {
      this._listenedEventTypes.add(type);
      this.addEventListener(type, this, t);
    }
  }

  /**
   * Centralized event handler that routes events to registered helper callbacks.
   */
  handleEvent (e) {
    if (!this._eventHandlers) return;

    const path = e.composedPath();

    for (const handler of this._eventHandlers) {
      if (e.type !== handler.type) continue;

      // Find the exact element in the event path that matches the selector
      const matchedElement = path.find(node =>
        node.nodeType === Node.ELEMENT_NODE && node.matches && node.matches(handler.selector)
      );

      if (matchedElement) {
        handler.callback.call(this, e, matchedElement);
        break;
      }
    }
  }
}

/** ICON COMPONENT */

export class AvIcon extends BaseComponent {
  static get observedAttributes () { return ['name', 'icon', 'class', 'className']; }

  render () {
    const iconName = this.getAttribute('name') || this.getAttribute('icon') || 'blank';
    const className = this.getAttribute('class') || this.getAttribute('className') || '';

    return html`<i class="app-icon inline-block leading-none fill-none text- align-middle icon-${iconName} ${className}"></i>`;
  }
}

AvIcon.register('lean-icon');
