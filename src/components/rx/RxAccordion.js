import { ReactiveElement } from '../ReactiveElement.js';

class RxAccordion extends ReactiveElement {
  static get observedAttributes() { return ['single']; }

  getInitialState() {
    return { single: false, openIndices: new Set() };
  }

  attributeChanged(name, oldValue, newValue) {
    if (name === 'single') {
      this.state.single = this.hasAttribute('single');
      if (this.state.single) {
        const openArr = Array.from(this.state.openIndices);
        if (openArr.length > 1) this.state.openIndices = new Set([openArr[0]]);
      }
    }
  }

  connectedCallback() {
    if (!this.classList.contains('w-full')) {
      this.className = "w-full rounded-md bg-gray-100 shadow-[0px_1px_10px] shadow-gray-200/40 block";
    }
    super.connectedCallback();    
  }

  disconnectedCallback() {
    this._childObserver?.disconnect();
  }

  mounted() {
    this.addEventListener('click', (e) => {
      const button = e.target.closest('[data-accordion-btn]');
      if (!button) return;
      const index = parseInt(button.getAttribute('data-index'), 10);
      
      const newOpen = new Set(this.state.openIndices);
      if (this.state.single) {
        newOpen.has(index) ? newOpen.delete(index) : (newOpen.clear(), newOpen.add(index));
      } else {
        newOpen.has(index) ? newOpen.delete(index) : newOpen.add(index);
      }
      this.state.openIndices = newOpen;
    });
  }

  render() {
    this.mapLightDOM('section', {
      template: (el, index, state) => {
        const isOpen = state.openIndices.has(index);
        return `
          <button data-accordion-btn data-index="${index}" aria-expanded="${isOpen}"
            class="group w-full flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-gray-50 px-5 text-[15px] leading-none text-accent-700 shadow-[0_1px_0] shadow-gray-300 outline-none hover:bg-gray-100">
            <span class="summary-text font-medium"></span>
            <span class="text-accent-600 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]/item:rotate-180">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>
            </span>
          </button>
          <div class="grid grid-rows-[0fr] transition-all duration-200 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]/item:grid-rows-[1fr]">
            <div class="overflow-hidden">
              <div class="px-5 py-[15px] bg-gray-50 text-gray-700 data-content-slot"></div>
            </div>
          </div>
        `;
      },
      contentTarget: '.data-content-slot',
      textTargets: {
        '.summary-text': (el) => el.getAttribute('title') || ''
      },
      sync: (el, index, state) => {
        const isOpen = state.openIndices.has(index);
        el.setAttribute('data-state', isOpen ? 'open' : 'closed');
        el.className = "mt-px w-full overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-gray-500 group/item";

        const btn = el.querySelector('button[data-accordion-btn]');
        if (btn) {
          btn.setAttribute('aria-expanded', isOpen);
          btn.setAttribute('data-index', index);
        }
      }
    });
  }
}

if (!customElements.get('rx-accordion')) {
  customElements.define("rx-accordion", RxAccordion);
}