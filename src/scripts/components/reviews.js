class Reviews extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <main class="main_review">
  <section class="container_review">

    <div class="title_review">
      <h2>reviews</h2>
      <div class="underline_review"></div>
    </div>

    <article class="review_review">
      <h4 id="author_review"></h4>
      <p id="job_review"></p>
      <p id="info_review">
        
      </p>

      <!-- prev next buttons-->
      <div class="button-container">
        <button class="prev-btn_review btn_review">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn_review btn_review">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

    </article>

  </section>
</main>
        `;
    }
}

customElements.define('reviews-list', Reviews);