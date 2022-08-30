import RestaurantSource from "../data/restaurant-source";
import {
    initError,
    initSuccess,
} from "../utils/swal-initiator";

const PostFormReview = async (id, name, review) => {
    const data = {
        id,
        name,
        review,
    };

    const reviewContainer = document.querySelector(".restaurant__customer-reviews__list");

    const newReview = `
    <div class="restaurant__customer-reviews__item">
        <p class="restaurant__customer-reviews__item__name">${name}</p>
        <p class="restaurant__customer-reviews__item__date">${date}</p>
        <p class="restaurant__customer-reviews__item__review">${review}</p>
    </div>
    `
    try {
        const response = await RestaurantSource.postReview(data);
        initSuccess(response.message);
        reviewContainer.innerHTML += newReview;
    } catch (error) {
        initError(error.message);
    }
}

export default PostFormReview;
