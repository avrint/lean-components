import { BaseComponent, AppIcons } from '../AvrintComponent.js';

export class HoverTooltipButtons extends BaseComponent {
  static get observedAttributes () { return ['menu-title']; }

  render () {
    const title = this.getAttribute('menu-title') || 'Default Title';

    return this.html`
      <div
        class="flex flex-col items-center p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-xl"
      >
        <div
          class="text-center mb-6 bg-gradient-to-r from-accent-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-3xl font-black tracking-tight"
        >
          ${title}
        </div>
        <div
          class="border border-gray-200/80 py-3 px-2 flex gap-2 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
        >
          <div class="group relative px-3 cursor-pointer">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent-50 hover:text-accent-600 transition-colors duration-300"
            >
            <av-icon name="home"/>
              
            </div>
            <span
              class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
            >
              Home
            </span>
          </div>

          <div class="group relative px-3 cursor-pointer">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent-50 hover:text-accent-600 transition-colors duration-300"
            >
               <av-icon name="message"/>
            </div>
            <span
              class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
            >
              Messages
            </span>
          </div>

          <div class="group relative px-3 cursor-pointer">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent-50 hover:text-accent-600 transition-colors duration-300"
            >
              <av-icon name="friends"/>
            </div>
            <span
              class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
            >
              User
            </span>
          </div>

          <div class="group relative px-3 cursor-pointer">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent-50 hover:text-accent-600 transition-colors duration-300"
            >
              <av-icon name="settings"/>
            </div>
            <span
              class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
            >
              Settings
            </span>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('hover-menu')) {
  customElements.define('hover-menu', HoverTooltipButtons);
}