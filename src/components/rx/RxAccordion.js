import { BaseComponent } from '../AvrintComponent.js';

export class RxAccordion extends BaseComponent {
  static get observedAttributes () { return ['single', 'expanded']; }
  static get observedEvents () { return ['click']; }

  constructor() {
    super();
    this.openIndices = new Set();
    this._initialized = false;

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

    !this._initialized && sections.forEach((section, index) => {
      if (section.hasAttribute('expanded')) {
        this.openIndices.has(index) ?  this.openIndices[index] = index : this.openIndices.add(index);
        this._initialized = true;
      }
    });

    if (isSingle && this.openIndices.size > 2) {
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
                  <span class="text-accent-600 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]/item:-rotate-z-180">
                  <lean-icon name="rx-caret-down"></lean-icon>
                  </span>
                </button>
              <div class="grid grid-rows-[0fr] transition-all duration-75 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]/item:grid-rows-[1fr]">
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

RxAccordion.register('rx-accordion');