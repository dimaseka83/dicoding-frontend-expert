class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div tabindex="0" class="hero__text">
        <h1 class="hero__title">Selamat Datang di Luwe Apps</h1>

        <p class="hero__subtitle">
          Makanan millenial masa kini
        </p>

        <a href="#main-content" class="btn">Read More</a>
      </div>
        `;
  }
}

customElements.define('hero-content', HeroContent);
