import CONFIG from '../../globals/config';

const createDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant__overview">
        <h3>Overview</h3>
        <h4>Description</h4>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__categories">
        <h3>Categories</h3>
        <div class="restaurant__categories__list">
            ${restaurant.categories.map((category) => `<span class="restaurant__categories__item">${category.name}</span>`).join('')}
        </div>
    </div>
    <div class="restaurant__menus">
        <h3>Menu</h3>
        <div class="restaurant__menus__foods">
            <h4>Foods</h4>
            <div class="restaurant__menus__foods__list">
                ${restaurant.menus.foods.map((food) => `<span class="restaurant__menus__foods__item">${food.name}</span>`).join('')}
            </div>
        </div>
        <div class="restaurant__menus__drinks">
            <h4>Drinks</h4>
            <div class="restaurant__menus__drinks__list">
                ${restaurant.menus.drinks.map((drink) => `<span class="restaurant__menus__drinks__item">${drink.name}</span>`).join('')}
            </div>
        </div>
    </div>
    <div class="restaurant__customer-reviews">
        <h3>Customer Reviews</h3>
        <div class="restaurant__customer-reviews__list">
            ${restaurant.customerReviews.map((review) => `
                <div class="restaurant__customer-reviews__item">
                    <p class="restaurant__customer-reviews__item__name">${review.name}</p>
                    <p class="restaurant__customer-reviews__item__date">${review.date}</p>
                    <p class="restaurant__customer-reviews__item__review">${review.review}</p>
                </div>
            `).join('')}
        </div>
    </div>
    `;

export default createDetailTemplate;