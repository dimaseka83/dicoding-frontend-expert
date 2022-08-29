import RestaurantSource from "../../data/restaurant-source";
import Card from "../templates/card";

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

    async afterRender(){
        const mainContainer = document.querySelector('#main-container');
        const listRestaurant = document.querySelector('#explore-restaurant');

        mainContainer.style.display = 'none';

        try {
            const data = await RestaurantSource.getResto();

            data.restaurants.forEach((restaurant) => {
                listRestaurant.innerHTML += Card(restaurant);
            });

            mainContainer.style.display = 'block';
        } catch (error) {
            console.log(error);
        }
    }
}

export default Home;