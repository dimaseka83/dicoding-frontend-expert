class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav id="navigationDrawer">
      <ul class="menu">
        <li class="logo"><a href="#">Luwe Apps</a></li>
        <li class="toggle"><a href="#">&#9776;</a></li>
        <li class="item"><a href="/">Home</a></li>
        <li class="item"><a href="#">Favorite</a></li>
        <li class="item"><a href="https://dhimasekaprasetya.netlify.app">About us</a></li>
      </ul>
    </nav>
  </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
