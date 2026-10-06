export class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="border: 2px solid #646cff; padding: 1rem; border-radius: 8px;">
        <h2>Hello from MyElement!</h2>
        <p>This is a custom Web Component rendered inside Vite.</p>
      </div>
    `;
  }
}

if (!customElements.get('my-element')) {
  customElements.define('my-element', MyElement);
}