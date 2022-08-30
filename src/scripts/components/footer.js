class Footer extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        let year = new Date().getFullYear();
        this.innerHTML = `
        <footer>
        <p>Copyright © ${year} - Luwe Apps</p>
      </footer>
        `;
    }
}

customElements.define('footer-bar', Footer);