export class BaseComponent extends HTMLElement {

  /**
   * Returns a mapping of attribute names to their corresponding element selectors.
   * These selectors are used to automatically update the element's text content when the attribute changes.
   * 
   * @returns An object where keys are attribute names and values are CSS selectors targeting the elements to update.
   * 
   * Example:
   * ```js
   * return {
   *  'title': '.t-title',
   *  'button-text': '.btn-add'
   * };
   * ```
  */
  static get attributeSelectors () {
    return {};
  }

  /**
   * Returns an array of event types that the component should observe.
   * These events are used to automatically add the event listeners to the event watcher.
   * 
   * @returns An array of event types.
   * 
   * Example:
   * ```js
   * return ['click', 'mouseover'];
   * ```
  */
  static get observedEvents () {
    return [];
  }

  /**
   * > **WARNING DO NOT OVERRIDE** 
   * 
   * This method is automatically generated based on the `attributeSelectors` property.
   * The base class handles attribute updates using this method.
   * @returns {string[]} An array of attribute names to observe.
  */
  static get observedAttributes () {
    return Object.keys(this.attributeSelectors);
  }

  /**
   * Handles attribute changes by updating the corresponding element's text content.
   * 
   * @param {string} name - The name of the attribute that changed.
   * @param {string} oldVal - The old value of the attribute.
   * @param {string} newVal - The new value of the attribute.
   */
  attributeChangedCallback (name, oldVal, newVal) {
    if (oldVal === newVal) return;
    const selector = this.constructor.attributeSelectors[name];
    const el = selector ? this.querySelector(selector) : null;
    if (el) el.textContent = newVal;
  }


  /**
   * Initializes the component.
   * This method is called when the element is inserted into a document.
   */
  constructor() {
    super();
  }

  /**
   * @private Sets up event listeners for the component.
   * @param {string} type - The type of event to listen for.
   * 
   * > Note: This method is used to handle custom events and delegate them to the appropriate handlers.
   * 
   * @example In the consuming class:
   * ```js
   * handleEvent (e) {
   *   if (e.type === "click" && e.target.closest('.btn-add')) {
   *     this.handleButtonClick(e);
   *   }
   * }
   * ```
  */
  _listen (type) {
    this.addEventListener(type, this);
  }

  /**
   * @private Synchronizes the component's DOM with the provided HTML.
   * 
   * This method updates the component's content while preserving dynamic zones.
   * 
   * @param {string} newHTML - The new HTML content to sync with the component.
   */
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