import FavoriteRestaurantDB from '../../data/favorite-restaurants-idb';
import Card from '../templates/card';

const Favorite = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Your Favorite Restaurant</h2>
            <div id="explore-restaurant" class="explore-restaurant"></div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#explore-restaurant');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += Card(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = 'There is no favorite restaurant yet';
    }
  },
};

export default Favorite;
