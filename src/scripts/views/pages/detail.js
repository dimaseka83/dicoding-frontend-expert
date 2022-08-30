import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { initError } from '../../utils/swal-initiator';
import createDetailTemplate from '../templates/detail';
import Spinner from '../templates/spinner';
import PostFormReview from '../../utils/post-form-review';

const Detail = {
  async render() {
    return `
            <div>
              <div id="loading"></div>
              <div id="like" class="like"></div>
              <div id="mainContainer">
                <div id="restaurant" class="restaurant"></div>
                <form-reviews></form-reviews>
              </div>
            </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#mainContainer');
    const restaurantDetail = document.querySelector('#restaurant');

    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const restaurant = await RestaurantSource.getDetail(url.id);
      restaurantDetail.innerHTML = createDetailTemplate(restaurant.restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#like'),
        restaurant,
      });
      this._submitReview(url.id);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';

    } catch (error) {
      console.log(error);
      loading.style.display = 'none';
      restaurantDetail.innerHTML = '<h1>Restaurant not found</h1>';
      initError(error.message);
    }
  },

  _submitReview(id) {
    const btnSubmit = document.querySelector('#formReview button');
    const name = document.querySelector('#name');
    const review = document.querySelector('#review');

    btnSubmit.addEventListener('click', async (e) => {
      e.preventDefault();
      await PostFormReview(id, name.value, review.value);
    });
  }
};

export default Detail;
