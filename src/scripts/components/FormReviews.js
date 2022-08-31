class FormReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="review__form">
        <h3>Add Review</h3>
        <form id="formReview">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Your name" required>
            </div>
            <div class="form-group">
                <label for="review">Review</label>
                <textarea class="form-control" id="review" rows="3" placeholder="Your review" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
        `;
  }
}

customElements.define('form-reviews', FormReviews);
