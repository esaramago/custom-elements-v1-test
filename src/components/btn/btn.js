window.customElements.define(
    'c-btn',
    class extends HTMLElement {
        connectedCallback() {
            var label = this.getAttribute('label') || '';
            this.innerHTML = `
                <link rel="stylesheet" href="dist/btn/btn.css">
                <button type="button">${label}</button>
            `;
        }
    }
)