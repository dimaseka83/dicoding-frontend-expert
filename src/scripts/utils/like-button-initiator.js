import FavoriteRestaurantDB from '../data/favorite-restaurants-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/like';
import {
  initSuccess,
  initError,
} from './swal-initiator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
   try {
    const { id } = this._restaurant;
    
    if (await this._isRestaurantLiked(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
   } catch (error) {
      console.log(error);
      initError(error.message);

      throw new Error(error);
   }
  },

  async _isRestaurantLiked(id) {
    const restaurants = await FavoriteRestaurantDB.getRestaurants(id);
    return !!restaurants;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.putRestaurants(this._restaurant);
      initSuccess('Restaurant added to favorites');
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.deleteRestaurants(this._restaurant.id);
      initSuccess('Restaurant removed from favorites');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
