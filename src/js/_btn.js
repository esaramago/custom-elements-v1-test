window.customElements.define(
    'c-btn',
    class extends HTMLElement {
        connectedCallback() {
            var label = this.getAttribute('label') || '';
            this.innerHTML = `
                <button type="button">${label}</button>
            `;
        }
    }
)