
window.customElements.define(
    'c-element',
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <h1 class="c-element__heading">Hello!</h1>
                <p>My <strong class="c-strong">style</strong> is awesome!</p>
            `;
        }
    }
)