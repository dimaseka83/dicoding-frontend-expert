import RestaurantSource from '../../data/restaurant-source';
import { initError } from '../../utils/swal-initiator';
import Card from '../templates/card';
import Spinner from '../templates/spinner';

const Home = {
  async render() {
    return `
        <div class="container">
        <div id="loading"></div>
        <div id="main-container">
            <h1 tabindex="0" class="main-content__title">Explore Restaurant</h1>
            <section id="explore-restaurant"></section>
        </div>
    </div>
        `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const mainContainer = document.querySelector('#main-container');
    const listRestaurant = document.querySelector('#explore-restaurant');

    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();
    try {
      const data = await RestaurantSource.getResto();

      data.restaurants.forEach((restaurant) => {
        listRestaurant.innerHTML += Card(restaurant);
      });

      mainContainer.style.display = 'block';
    } catch (error) {
      console.log(error);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      initError(error);
    }
  },
};

export default Home;
