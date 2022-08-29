class Hero extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="hero">
    <div class="heroinner">
      <h1 class="herotitle">Luwe Apps</h1>
      <p class="herosubtitle">Find the best restaurants only on the best websites.</p>
    </div>
  </div>
        `
    }
}

customElements.define('hero-bar', Hero);