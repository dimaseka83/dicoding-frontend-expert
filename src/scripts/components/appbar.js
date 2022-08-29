class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>Luwe Apps</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
              <a href="https://dhimasekaprasetya.netlify.app" target="_blank"
              rel="noopener noreferrer">About</a>
          </li>
          </ul>
        </nav>
      </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
