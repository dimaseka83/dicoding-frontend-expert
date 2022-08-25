import Spinner from '../templates/spinner';
import RestaurantSource from '../../data/resto-source';
import restoCard from '../templates/resto-card';
import { initSwalError } from '../../utils/swal-initiator';

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
    const listContainer = document.querySelector('#explore-restaurant');

    mainContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const data = await RestaurantSource.getRestaurantList();

      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restoCard(restaurant);
      });

      loading.style.display = 'none';
      mainContainer.style.display = 'block';
    } catch (error) {
      console.error(err);

      mainContainer.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Home;
