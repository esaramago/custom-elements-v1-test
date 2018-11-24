window.customElements.define(
    'c-btn',
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <button type="button">sssAA</button>
            `;
        }
    }
)