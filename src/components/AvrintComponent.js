export class BaseComponent extends HTMLElement {
  static get attributeSelectors() {
    return {};
  }

  static get observedEvents() {
    return [];
  }

  static get observedAttributes() {
    return Object.keys(this.attributeSelectors);
  }

  constructor() {
    super();
  }

  _listen (type) { this.addEventListener(type, this); }


  attributeChangedCallback (name, oldVal, newVal) {
    if (oldVal === newVal) return;
    const selector = this.constructor.attributeSelectors[name];
    const el = selector ? this.querySelector(selector) : null;
    if (el) el.textContent = newVal;
  }

  _sync (newHTML) {
    // 1. Create a temp container for the new template
    const temp = document.createElement('div');
    temp.innerHTML = newHTML;

    // 2. PRESERVE DYNAMIC ZONES
    // Find all elements marked data-dynamic in the CURRENT DOM
    this.querySelectorAll('[data-dynamic]').forEach(dynamicEl => {
      // Find the matching element in the NEW template
      const selector = `${dynamicEl.tagName.toLowerCase()}[data-dynamic="${dynamicEl.dataset.dynamic}"]`;
      const match = temp.querySelector(selector);
      if (match) {
        // Move the current actual DOM content into the template's placeholder
        match.innerHTML = dynamicEl.innerHTML;
      }
    });

    // 3. Perform the surgical update
    const finalHTML = temp.innerHTML;
    if (this.innerHTML === finalHTML) return;

    const newChildren = Array.from(temp.children);
    const currentChildren = Array.from(this.children);

    newChildren.forEach((newNode, i) => {
      const oldNode = currentChildren[i];
      if (!oldNode || newNode.outerHTML !== oldNode.outerHTML) {
        if (oldNode) this.replaceChild(newNode, oldNode);
        else this.appendChild(newNode);
      }
    });

    while (this.children.length > newChildren.length) {
      this.removeChild(this.lastChild);
    }
  }

  connectedCallback () {

    this.constructor.observedEvents.forEach((event, i) => {
      this._listen(event);
    });

    this.render();

    this.observer = new MutationObserver(() => {
      if (this.hasAttribute('static')) return;

      this.observer.disconnect();
      this.render();
      this.observer.observe(this, { childList: true, subtree: true });
    });

    this.observer.observe(this, { childList: true, subtree: true });
  }

  disconnectedCallback () {
    this.observer.disconnect();
  }
}