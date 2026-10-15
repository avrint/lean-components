import { BaseComponent } from '../AvrintComponent.js';

export class RxAccordion extends BaseComponent {
  static get observedAttributes () { return ['single']; }
  static get observedEvents () { return ['click']; }

  constructor() {
    super();
    this.openIndices = new Set();
    this.event('click', '[data-accordion-btn]', (e, target) => {
      const index = parseInt(target.getAttribute('data-index'), 10);
      const isSingle = this.hasAttribute('single');

      const newOpen = new Set(this.openIndices);
      if (isSingle) {
        newOpen.has(index) ? newOpen.delete(index) : (newOpen.clear(), newOpen.add(index));
      } else {
        newOpen.has(index) ? newOpen.delete(index) : newOpen.add(index);
      }
      this.openIndices = newOpen;
      this._render();
    });
  }

  render () {
    const sections = Array.from(this.querySelectorAll('section'));
    const isSingle = this.hasAttribute('single');

    if (isSingle && this.openIndices.size > 1) {
      const firstOpen = Array.from(this.openIndices)[0];
      this.openIndices = new Set([firstOpen]);
    }

    return this.html`
      <div class="w-full rounded-md bg-gray-100 shadow-[0px_1px_10px] shadow-gray-200/40 block">
        ${sections.map((section, index) => {
          const isOpen = this.openIndices.has(index);
          const title = section.getAttribute('title') || 'Expand';

          // Automatically assign slot target during render
          section.setAttribute('slot', `section-${index}`);

          return this.html`
            <div class="mt-px w-full overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-gray-500 group/item"
                data-state="${isOpen ? 'open' : 'closed'}">
              <button data-accordion-btn data-index="${index}" aria-expanded="${isOpen}"
                class="group w-full flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-gray-50 px-5 text-[15px] leading-none text-accent-700 shadow-[0_1px_0] shadow-gray-300 outline-none hover:bg-gray-100">
                <span class="summary-text font-medium">${title}</span>
                <span class="text-accent-600 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]/item:rotate-180">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821T7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                </span>
              </button>
              <div class="grid grid-rows-[0fr] transition-all duration-200 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]/item:grid-rows-[1fr]">
                <div class="overflow-hidden">
                  <div class="px-5 py-[15px] bg-gray-50 text-gray-700">
                    <slot name="section-${index}"></slot>
                  </div>
                </div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }
}

if (!customElements.get('rx-accordion')) {
  customElements.define("rx-accordion", RxAccordion);
}