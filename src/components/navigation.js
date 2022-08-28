class Navigation extends HTMLElement{
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
          <a href="#content" class="skip-link">Skip to content</a>

  <header>
    <nav>
      <ul class="menu">
        <li class="logo"><a href="#">Luwe Apps</a></li>
        <li class="toggle"><a href="#">&#9776;</a></li>
        <li class="item"><a href="/">Home</a></li>
        <li class="item"><a href="#">Favorite</a></li>
        <li class="item"><a href="https://dhimasekaprasetya.netlify.app">About us</a></li>
      </ul>
    </nav>
  </header>`
    }
}

customElements.define('navigation-component', Navigation);