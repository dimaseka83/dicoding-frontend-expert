import CONFIG from '../../globals/config';

const createDetailTemplate = (restaurant) => `
<ul class="cards_edit">
<li>
  <a href="" class="card_edit">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="card__image_edit lazyload" />
    <div class="card__overlay_edit">
      <div class="card__header_edit">
        <svg class="card__arc_edit" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
        <div class="card__header-text_edit">
          <h3 class="card__title_edit">${restaurant.name}</h3>            
          <span class="card__status_edit">
            <div class="user_edit">
                <div class="user-info_edit">
                <h1>
                <i title="ratings" class="fa fa-star"></i>
                Rating ${restaurant.rating}</h1>
                <p>
                <i title="ratings" class="fas fa-map-marker-alt"></i>
                 ${restaurant.address}, ${restaurant.city}</p>
                </div>
            </div>
          <div class="restaurant__categories__list">
              ${restaurant.categories.map((category) => `<span class="restaurant__categories__item">${category.name}</span>`).join('')}
          </div>
          </span>
        </div>
      </div>
      <p class="card__description_edit">${restaurant.description}</p>
    </div>
  </a>      
</li>  
</ul>

<div class="main-container">
  <div class="heading">
    <h1 class="heading__title">Menu Makanan</h1>
  </div>
  <div class="cards_food">
    <div class="card_food card-1_food">
      <div class="card__icon_food"><i class="fa-solid fa-pizza-slice"></i></div>
      <h2 class="card__title_food">
        ${restaurant.menus.foods.map((food) => `<p class="restaurant__menus__foods__item">${food.name}</p>`).join('')}
      </h2>
      <p class="card__apply_food">
        <span class="card__link_food">Pesan Makanan Sekarang <i class="fas fa-arrow-right"></i></span>
      </p>
    </div>
    <div class="card_food card-2_food">
      <div class="card__icon_food"><i class="fa-solid fa-champagne-glasses"></i></div>
      <h2 class="card__title_food">
        ${restaurant.menus.drinks.map((drink) => `<p class="restaurant__menus__drinks__item">${drink.name}</p>`).join('')}
      </h2>
      <p class="card__apply_food">
        <span class="card__link_food">Pesan Minuman Sekarang <i class="fas fa-arrow-right"></i></span>
      </p>
    </div>
  </div>
</div>
    `;

export default createDetailTemplate;
