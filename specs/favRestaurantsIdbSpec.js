import { itActsAsFavoriteRestaurantModel } from './contract/favRestoContract';
import FavoriteRestaurantDB from '../src/scripts/data/favorite-restaurants-idb';


describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurants(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantDB);
});
