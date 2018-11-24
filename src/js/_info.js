window.customElements.define(
    'c-info',
    class extends HTMLElement {
        connectedCallback() {

            var content = this.getAttribute('content');

            this.innerHTML = `
                <span class="c-info__icon">i</span>
                <div class="c-info__content">${content}</div>
            `;
        }

        attributeChangedCallback(name, oldValue, newValue) {
            console.log('Custom square element attributes changed.');
        }
    }
)