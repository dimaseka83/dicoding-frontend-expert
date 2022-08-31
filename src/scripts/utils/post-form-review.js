import RestaurantSource from '../data/restaurant-source';
import {
  initError,
  initSuccess,
} from './swal-initiator';

const PostFormReview = async (id, name, review) => {
  const data = {
    id,
    name,
    review,
  };
  try {
    const response = await RestaurantSource.postReview(data);
    initSuccess(response.message);
  } catch (error) {
    initError(error.message);
  }
};

export default PostFormReview;
