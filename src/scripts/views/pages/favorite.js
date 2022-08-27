import FavRestoIdb from '../../data/resto-idb';
import restoCard from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
        <div class="container">
            <h2 class="title-container">Restoran Favorite</h2>

            <section id="fav-resto"></section>
        </div>
        `;
  },

  async afterRender() {
    const data = await FavRestoIdb.getAllResto();

    const favRestoContainer = document.querySelector('#fav-resto');

    if (data.length === 0) {
      favRestoContainer.innerHTML = `
            Tidak ada restoran yang di favoritkan, Pilih restoran yang ingin di favoritkan dengan klik tombol hati di detail restoran.
            `;
    }

    data.forEach((resto) => {
      favRestoContainer.innerHTML += restoCard(resto);
    });
  },
};

export default Favorite;
