import { BaseComponent } from './AvrintComponent.js';

export class TestComponent extends BaseComponent {
  static get observedAttributes () { return ['title']; }

  render () {
    const title = this.getAttribute('title') || 'Default Title';

    return this.html`
      <div style="padding: 1rem; border: 2px solid #62994b; border-radius: 8px; background: gray;">
        <h2 class="title">${title}</h2>
        <p>Web Component loaded inside Storybook!</p>
      </div>
    `;
  }
}

TestComponent.register('test-component');