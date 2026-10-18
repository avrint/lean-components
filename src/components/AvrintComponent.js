// --- PASTED LIT-HTML BUNDLE START ---
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).lit_html = {}); }(this, function (t) {
  "use strict";
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const e = globalThis, i = t => t, s = e.trustedTypes, n = s ? s.createPolicy("lit-html", { createHTML: t => t }) : void 0, o = "$lit$", r = `lit$${Math.random().toFixed(9).slice(2)}$`, h = "?" + r, l = `<${h}>`, $ = document, A = () => $.createComment(""), _ = t => null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, c = t => a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ \t\n\f\r]", p = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, u = /-->/g, g = />/g, f = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), m = /'/g, v = /"/g, y = /^(?:script|style|textarea|title)$/i, x = t => (e, ...i) => ({ _$litType$: t, strings: e, values: i }), H = x(1), N = x(2), b = x(3), T = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), M = new WeakMap, w = $.createTreeWalker($, 129); function S (t, e) { if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array"); return void 0 !== n ? n.createHTML(e) : e; } const I = (t, e) => { const i = t.length - 1, s = []; let n, h = 2 === e ? "<svg>" : 3 === e ? "<math>" : "", $ = p; for (let e = 0; e < i; e++) { const i = t[e]; let A, _, a = -1, c = 0; for (; c < i.length && ($.lastIndex = c, _ = $.exec(i), null !== _);)c = $.lastIndex, $ === p ? "!--" === _[1] ? $ = u : void 0 !== _[1] ? $ = g : void 0 !== _[2] ? (y.test(_[2]) && (n = RegExp("</" + _[2], "g")), $ = f) : void 0 !== _[3] && ($ = f) : $ === f ? ">" === _[0] ? ($ = n ?? p, a = -1) : void 0 === _[1] ? a = -2 : (a = $.lastIndex - _[2].length, A = _[1], $ = void 0 === _[3] ? f : '"' === _[3] ? v : m) : $ === v || $ === m ? $ = f : $ === u || $ === g ? $ = p : ($ = f, n = void 0); const d = $ === f && t[e + 1].startsWith("/>") ? " " : ""; h += $ === p ? i + l : a >= 0 ? (s.push(A), i.slice(0, a) + o + i.slice(a) + r + d) : i + r + (-2 === a ? e : d); } return [S(t, h + (t[i] || "<?>") + (2 === e ? "</svg>" : 3 === e ? "</math>" : "")), s]; }; class E { constructor({ strings: t, _$litType$: e }, i) { let n; this.parts = []; let l = 0, $ = 0; const _ = t.length - 1, a = this.parts, [c, d] = I(t, e); if (this.el = E.createElement(c, i), w.currentNode = this.el.content, 2 === e || 3 === e) { const t = this.el.content.firstChild; t.replaceWith(...t.childNodes); } for (; null !== (n = w.nextNode()) && a.length < _;) { if (1 === n.nodeType) { if (n.hasAttributes()) for (const t of n.getAttributeNames()) if (t.endsWith(o)) { const e = d[$++], i = n.getAttribute(t).split(r), s = /([.?@])?(.*)/.exec(e); a.push({ type: 1, index: l, name: s[2], strings: i, ctor: "." === s[1] ? L : "?" === s[1] ? O : "@" === s[1] ? j : R }), n.removeAttribute(t); } else t.startsWith(r) && (a.push({ type: 6, index: l }), n.removeAttribute(t)); if (y.test(n.tagName)) { const t = n.textContent.split(r), e = t.length - 1; if (e > 0) { n.textContent = s ? s.emptyScript : ""; for (let i = 0; i < e; i++)n.append(t[i], A()), w.nextNode(), a.push({ type: 2, index: ++l }); n.append(t[e], A()); } } } else if (8 === n.nodeType) if (n.data === h) a.push({ type: 2, index: l }); else { let t = -1; for (; -1 !== (t = n.data.indexOf(r, t + 1));)a.push({ type: 7, index: l }), t += r.length - 1; } l++; } } static createElement (t, e) { const i = $.createElement("template"); return i.innerHTML = t, i; } } function B (t, e, i = t, s) { if (e === T) return e; let n = void 0 !== s ? i._$Co?.[s] : i._$Cl; const o = _(e) ? void 0 : e._$litDirective$; return n?.constructor !== o && (n?._$AO?.(!1), void 0 === o ? n = void 0 : (n = new o(t), n._$AT(t, i, s)), void 0 !== s ? (i._$Co ??= [])[s] = n : i._$Cl = n), void 0 !== n && (e = B(t, n._$AS(t, e.values), n, s)), e; } class U { constructor(t, e) { this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e; } get parentNode () { return this._$AM.parentNode; } get _$AU () { return this._$AM._$AU; } u (t) { const { el: { content: e }, parts: i } = this._$AD, s = (t?.creationScope ?? $).importNode(e, !0); w.currentNode = s; let n = w.nextNode(), o = 0, r = 0, h = i[0]; for (; void 0 !== h;) { if (o === h.index) { let e; 2 === h.type ? e = new P(n, n.nextSibling, this, t) : 1 === h.type ? e = new h.ctor(n, h.name, h.strings, this, t) : 6 === h.type && (e = new W(n, this, t)), this._$AV.push(e), h = i[++r]; } o !== h?.index && (n = w.nextNode(), o++); } return w.currentNode = $, s; } p (t) { let e = 0; for (const i of this._$AV) void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++; } } class P { get _$AU () { return this._$AM?._$AU ?? this._$Cv; } constructor(t, e, i, s) { this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = s?.isConnected ?? !0; } get parentNode () { let t = this._$AA.parentNode; const e = this._$AM; return void 0 !== e && 11 === t?.nodeType && (t = e.parentNode), t; } get startNode () { return this._$AA; } get endNode () { return this._$AB; } _$AI (t, e = this) { t = B(this, t, e), _(t) ? t === C || null == t || "" === t ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : c(t) ? this.k(t) : this._(t); } O (t) { return this._$AA.parentNode.insertBefore(t, this._$AB); } T (t) { this._$AH !== t && (this._$AR(), this._$AH = this.O(t)); } _ (t) { this._$AH !== C && _(this._$AH) ? this._$AA.nextSibling.data = t : this.T($.createTextNode(t)), this._$AH = t; } $ (t) { const { values: e, _$litType$: i } = t, s = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = E.createElement(S(i.h, i.h[0]), this.options)), i); if (this._$AH?._$AD === s) this._$AH.p(e); else { const t = new U(s, this), i = t.u(this.options); t.p(e), this.T(i), this._$AH = t; } } _$AC (t) { let e = M.get(t.strings); return void 0 === e && M.set(t.strings, e = new E(t)), e; } k (t) { a(this._$AH) || (this._$AH = [], this._$AR()); const e = this._$AH; let i, s = 0; for (const n of t) s === e.length ? e.push(i = new P(this.O(A()), this.O(A()), this, this.options)) : i = e[s], i._$AI(n), s++; s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s); } _$AR (t = this._$AA.nextSibling, e) { for (this._$AP?.(!1, !0, e); t !== this._$AB;) { const e = i(t).nextSibling; i(t).remove(), t = e; } } setConnected (t) { void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t)); } } class R { get tagName () { return this.element.tagName; } get _$AU () { return this._$AM._$AU; } constructor(t, e, i, s, n) { this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = n, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = C; } _$AI (t, e = this, i, s) { const n = this.strings; let o = !1; if (void 0 === n) t = B(this, t, e, 0), o = !_(t) || t !== this._$AH && t !== T, o && (this._$AH = t); else { const s = t; let r, h; for (t = n[0], r = 0; r < n.length - 1; r++)h = B(this, s[i + r], e, r), h === T && (h = this._$AH[r]), o ||= !_(h) || h !== this._$AH[r], h === C ? t = C : t !== C && (t += (h ?? "") + n[r + 1]), this._$AH[r] = h; } o && !s && this.j(t); } j (t) { t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? ""); } } class L extends R { constructor() { super(...arguments), this.type = 3; } j (t) { this.element[this.name] = t === C ? void 0 : t; } } class O extends R { constructor() { super(...arguments), this.type = 4; } j (t) { this.element.toggleAttribute(this.name, !!t && t !== C); } } class j extends R { constructor(t, e, i, s, n) { super(t, e, i, s, n), this.type = 5; } _$AI (t, e = this) { if ((t = B(this, t, e, 0) ?? C) === T) return; const i = this._$AH, s = t === C && i !== C || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, n = t !== C && (i === C || s); s && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, t), this._$AH = t; } handleEvent (t) { "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t); } } class W { constructor(t, e, i) { this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i; } get _$AU () { return this._$AM._$AU; } _$AI (t) { B(this, t); } } const D = { M: o, P: r, A: h, C: 1, L: I, R: U, D: c, V: B, I: P, H: R, N: O, U: j, B: L, F: W }, V = e.litHtmlPolyfillSupport; V?.(E, P), (e.litHtmlVersions ??= []).push("3.3.3"); t._$LH = D, t.html = H, t.mathml = b, t.noChange = T, t.nothing = C, t.render = (t, e, i) => { const s = i?.renderBefore ?? e; let n = s._$litPart$; if (void 0 === n) { const t = i?.renderBefore ?? null; s._$litPart$ = n = new P(e.insertBefore(A(), t), t, void 0, i ?? {}); } return n._$AI(t), n; }, t.svg = N;
});
// --- PASTED LIT-HTML BUNDLE END ---

export const { html, render, nothing } = lit_html;

// --- TailwindCSS INTEGRATION ---
import tailwindCssString from '../style/components.css?inline';
const tailwindStyles = new CSSStyleSheet();
tailwindStyles.replaceSync(tailwindCssString);

// --- icon-font INTEGRATION ---
import iconMap from '../assets/fonts/app-icons.json';

export const AppIcons = Object.freeze(
  Object.keys(iconMap).reduce((acc, key) => {
    const enumKey = key.charAt(0).toLowerCase() + key.slice(1);
    acc[enumKey] = key;
    return acc;
  }, {})
);

export class BaseComponent extends HTMLElement {

  html = html;

  // Make AppIcons accessible on the class/instance if needed
  static AppIcons = AppIcons;
  AppIcons = AppIcons;

  /**
   * Helper method available to all child components to render an icon.
   * @param {string} iconName - Use AppIcons.Home, etc.
   * @param {string} [className=''] - Extra utility classes (e.g. text-lg text-red-500)
   */
  icon (iconName, className = '') {
    const codePoint = iconMap[iconName];
    if (!codePoint) return html``;

    // const char = String.fromCodePoint(codePoint);

    // Automatically uses the .app-icon class defined in the adopted stylesheet
    return html`<i class="app-icon inline-block leading-none fill-none icon-${iconName} ${className}"></i>`;
  }

  /**
   * Registers the custom element. 
   * Defers definition until DOM is loaded if necessary, firing only once.
   * @param {string} [elemName] Optional custom element tag name
   */
  static register (elemName) {
    const name = elemName || this.elementName;
    if (!name) return this;

    const defineElement = () => {
      if (!customElements.get(name)) {
        customElements.define(name, this);
      }
    };

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', defineElement, { once: true });
    } else {
      defineElement();
    }

    return this;
  }


  static get attributeSelectors () {
    return {};
  }

  static get observedEvents () {
    return [];
  }

  static get observedAttributes () {
    return Object.keys(this.attributeSelectors);
  }

  attributeChangedCallback (_name, oldVal, newVal) {
    if (oldVal === newVal) return;
    // console.info("attributeChangedCallback", _name, oldVal, newVal);
    this._render();
  }

  constructor() {
    super();
    // 1. Enable Shadow DOM encapsulation
    this.attachShadow({ mode: 'open' });

    // 2. Adopt Tailwind styles automatically if configured
    if (typeof tailwindStyles !== 'undefined') {
      this.shadowRoot.adoptedStyleSheets = [tailwindStyles];
    }

    // Flag to prevent recursive rendering loops from mutation observers
    this._isRendering = false;
  }

  _listen (type) {
    this.addEventListener(type, this);
  }

  _render () {
    if (this._isRendering) return;
    if (typeof this.render === 'function') {
      try {
        this._isRendering = true;
        render(this.render(), this.shadowRoot);
      } finally {
        this._isRendering = false;
      }
    }
  }

  connectedCallback () {
    this.constructor.observedEvents.forEach((event) => {
      this.addEventListener(event, this);
    });

    // Scoped strictly to childList changes for light DOM content projection
    this._observer = new MutationObserver((mutations) => {
      if (this._isRendering) return;
      const shouldRender = mutations.some(mutation => {
        if (mutation.type === 'childList') return true;
        if (mutation.target !== this && mutation.attributeName !== 'slot' && mutation.type === 'attributes') return true;
        return false;
      });
      if (shouldRender) {
        this._render();
      }
    });

    this._observer.observe(this, { childList: true, subtree: true, attributes: true });

    this._render();
  }

  disconnectedCallback () {
    this._observer?.disconnect();
  }

  /**
   * Native slot change handler bound via arrow function to preserve component context.
   */
  handleSlotChange = () => {
    this._render();
  };

  /**
   * Registers a delegated event handler for the component.
   * Can be called multiple times in the subclass constructor.
   * 
   * @param {string} type The event type (e.g., 'click')
   * @param {string} selector The CSS selector to match against
   * @param {Function} callback The handler function: (e, target) => {}
   */
  event (type, selector, callback, t) {
    if (!this._eventHandlers) {
      this._eventHandlers = [];
    }
    this._eventHandlers.push({ type, selector, callback, t });

    if (!this._listenedEventTypes) {
      this._listenedEventTypes = new Set();
    }

    // Automatically add the event listener to the host if not already listening
    if (!this._listenedEventTypes.has(type)) {
      this._listenedEventTypes.add(type);
      this.addEventListener(type, this, t);
    }
  }

  /**
   * Centralized event handler that routes events to registered helper callbacks.
   */
  handleEvent (e) {
    if (!this._eventHandlers) return;

    const path = e.composedPath();

    for (const handler of this._eventHandlers) {
      if (e.type !== handler.type) continue;

      // Find the exact element in the event path that matches the selector
      const matchedElement = path.find(node =>
        node.nodeType === Node.ELEMENT_NODE && node.matches && node.matches(handler.selector)
      );

      if (matchedElement) {
        handler.callback.call(this, e, matchedElement);
        break;
      }
    }
  }
}

/** ICON COMPONENT */

export class AvIcon extends BaseComponent {
  static get observedAttributes () { return ['name', 'class']; }

  render () {
    const iconName = this.getAttribute('name') || 'blank';
    const className = this.getAttribute('class') || 'text-xl';

    return html`<i class="app-icon inline-block leading-none fill-none icon-${iconName} ${className}"></i>`;
  }
}

AvIcon.register('lean-icon');
