import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import createDetailTemplate from '../templates/detail';

const Detail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createDetailTemplate(restaurant.restaurant);
  },
};

export default Detail;
