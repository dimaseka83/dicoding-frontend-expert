import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { initError } from '../../utils/swal-initiator';
import createDetailTemplate from '../templates/detail';
import Spinner from '../templates/spinner';
import PostFormReview from '../../utils/post-form-review';

// Components
import '../../components/reviews';

const Detail = {
  async render() {
    return `
            <div>
              <div id="loading"></div>
              <div id="like" class="like"></div>
              <div id="mainContainer"> 
                <div id="restaurant" class="restaurant"></div>
                <reviews-list></reviews-list>
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

      this._review(restaurant.restaurant.customerReviews);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';

    } catch (error) {
      console.log(error);
      loading.style.display = 'none';
      restaurantDetail.innerHTML = '<h1>Restaurant not found</h1>';
      initError(error.message);
    }
  },

  _review(reviews) {
    // local reviews data
    const customerReviews = reviews;


    const name = document.getElementById("author_review");
    const date = document.getElementById("job_review");
    const review = document.getElementById("info_review");

    const prevBtn = document.querySelector(".prev-btn_review");
    const nextBtn = document.querySelector(".next-btn_review");

let currentItem = 0;

// load initial item
    setTimeout(() => {
          const item = customerReviews[currentItem];
          name.textContent = item.name;
          date.textContent = item.date;
          review.textContent = item.review;
    }, 500);
// show person based on item
function showPerson(person) {
  const item = customerReviews[person];
  name.textContent = item.name;
  date.textContent = item.date;
  review.textContent = item.review;
}

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > customerReviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = customerReviews.length - 1;
  }
  showPerson(currentItem);
});
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
