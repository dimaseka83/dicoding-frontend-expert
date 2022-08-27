class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const year = new Date().getFullYear();
    this.innerHTML = `
        <footer tabindex="0">
            <ul>
                <li>Copyright © ${year} - Luwe Apps</li>
            </ul>
        </footer>
        `;
  }
}

customElements.define('custom-footer', CustomFooter);
