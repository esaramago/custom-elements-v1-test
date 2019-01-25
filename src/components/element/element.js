window.customElements.define(
    'c-element',
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <link rel="stylesheet" href="dist/element/element.css">
                <h1 class="c-element__heading">Hello!</h1>
                <p>My <strong class="c-strong">style</strong> is awesome!</p>
            `;
        }

        attributeChangedCallback(name, oldValue, newValue) {
            console.log('Custom square element attributes changed.');
        }
    }
)