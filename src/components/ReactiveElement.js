export class ReactiveElement extends HTMLElement {
  constructor() {
    super();
    this._state = new Proxy(this.getInitialState(), {
      set: (target, property, value) => {
        target[property] = value;
        this.scheduleUpdate();
        return true;
      }
    });
  }

  getInitialState() { return {}; }
  get state() { return this._state; }

  connectedCallback() {
    this.initializeAttributes();
    if (this.initializeChildren) this.initializeChildren();
    this.renderTemplate();
    if (this.mounted) this.mounted();

    // Watch for dynamic title attribute changes on child sections
    this._childObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'title') {
          this.scheduleUpdate();
          break;
        }
      }
    });

    this._childObserver.observe(this, {
      attributes: true,
      attributeFilter: ['title'],
      subtree: true
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (this.attributeChanged) this.attributeChanged(name, oldValue, newValue);
  }

  initializeAttributes() {
    (this.constructor.observedAttributes || []).forEach(attr => {
      if (this.hasAttribute(attr)) {
        this.attributeChanged(attr, null, this.getAttribute(attr));
      }
    });
  }

  scheduleUpdate() {
    if (this._updateScheduled) return;
    this._updateScheduled = true;
    queueMicrotask(() => {
      this._updateScheduled = false;
      this.renderTemplate();
    });
  }

  renderTemplate() {
    if (this.render) this.render();
  }

  html(str) {
    const template = document.createElement('template');
    template.innerHTML = str.trim();
    return template.content;
  }

  /**
   * REUSABLE BASE ENGINE: Automatically handles Light DOM wrapping,
   * content preservation, text target binding, and state updates.
   */
  mapLightDOM(selector, config) {
    this.querySelectorAll(selector).forEach((el, index) => {
      // 1. First-time initialization & structural wrapping
      if (!el.hasAttribute('data-reactive-enhanced')) {
        el.setAttribute('data-reactive-enhanced', 'true');

        // Safely preserve original child contents
        const contentContainer = document.createElement('div');
        while (el.firstChild) {
          contentContainer.appendChild(el.firstChild);
        }

        // Render template structure provided by component config
        const fragment = this.html(config.template(el, index, this.state));

        // Inject preserved content into designated slot target if specified
        if (config.contentTarget) {
          const slot = fragment.querySelector(config.contentTarget);
          if (slot) slot.appendChild(contentContainer);
        }

        el.appendChild(fragment);
      }

      // 2. Subsequent sync: Update classes, attributes, and text targets automatically
      if (config.sync) {
        config.sync(el, index, this.state);
      }

      // 3. Automatically sync text targets defined in config
      if (config.textTargets) {
        for (const [targetSelector, getTextFn] of Object.entries(config.textTargets)) {
          const targetEl = el.querySelector(targetSelector);
          if (targetEl) {
            const newText = getTextFn(el, index, this.state);
            if (targetEl.textContent !== newText) {
              targetEl.textContent = newText;
            }
          }
        }
      }
    });
  }
}