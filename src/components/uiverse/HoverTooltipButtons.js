import { BaseComponent } from '../AvrintComponent.js';

export class AvCard extends BaseComponent {

  render () {
    return this.html`
      <div
        class="flex flex-col items-center p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-xl"
      >
       <slot/>
      </div>
    `;
  }
}

if (!customElements.get('av-card')) {
  customElements.define('av-card', AvCard);
}

export class AvGradientText extends BaseComponent {
  static get observedAttributes () { return ['className']; }
  render () {
    const className = this.getAttribute('className') || "";
    return this.html`
      <div
          class="bg-gradient-to-r from-accent-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-black tracking-tight ${className}"
        >
          <slot/>
        </div>
    `;
  }
}

if (!customElements.get('av-gradient-text')) {
  customElements.define('av-gradient-text', AvGradientText);
}

export class AvIconButton extends BaseComponent {
  static get observedAttributes () { return ['icon', 'tooltip']; }

  render () {
    const iconName = this.getAttribute('icon') || 'home';
    const tooltip = this.getAttribute('tooltip');

    return this.html`
    <div class="group relative px-3 cursor-pointer">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent-50 active:bg-accent-100 hover:text-accent-500 transition-colors duration-400 hover:duration-75"
      >
      <lean-icon class="align-middle p-1" name="${iconName}"/>
        
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

if (!customElements.get('av-icon-button')) {
  customElements.define('av-icon-button', AvIconButton);
}



export class HoverTooltipButtons extends BaseComponent {
  static get observedAttributes () { return ['menu-title']; }

  render () {
    const title = this.getAttribute('menu-title') || 'Default Title';

    return this.html`
     <av-card>
        <av-gradient-text class="text-3xl mb-6">
          ${title}
        </av-gradient-text>
        <div
          class="border border-gray-200/80 py-3 px-2 flex gap-2 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
        >
          <av-gradient-text>
            <av-icon-button icon="home"></av-icon-button>
          </av-gradient-text>
          <av-icon-button icon="message" tooltip="Messages"></av-icon-button>
          <av-icon-button icon="message" tooltip="Messages 2"></av-icon-button>
          <av-icon-button icon="message" tooltip="Messages 3 3"></av-icon-button>
          <av-icon-button class="text-accent3-700" icon="friends" tooltip="User"></av-icon-button>
          <av-icon-button class="text-accent2-700" icon="settings" tooltip="Settings"></av-icon-button>
        </div>
      </av-card>
    `;
  }
}

if (!customElements.get('hover-menu')) {
  customElements.define('hover-menu', HoverTooltipButtons);
}