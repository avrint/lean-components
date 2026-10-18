import { BaseComponent } from '../AvrintComponent.js';

export class AvIconButton extends BaseComponent {
  static get observedAttributes () { return ['icon', 'tooltip', "className"]; }

  render () {
    const iconName = this.getAttribute('icon') || 'blank';
    const tooltip = this.getAttribute('tooltip') || null;
    const className = this.getAttribute('className') || "";

    return this.html`
    <div class="group relative px-0 cursor-pointer">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent-50 active:bg-accent-100 hover:text-accent-600 transition-colors "
      >
      <lean-icon class="align-middle p-0 text-[1em] ${className}" name="${iconName}"/>
        
      </div>
      ${tooltip ? this.html`<span
        class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-200 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white whitespace-nowrap"
      >
        ${tooltip}
      </span>` : ''
      }
    </div>
    `;
  }
}

AvIconButton.register('lean-icon-button');

