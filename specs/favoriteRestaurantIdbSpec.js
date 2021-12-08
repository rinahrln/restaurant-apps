import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import { itActsAsFavoriteMRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteMRestaurantModel(FavoriteRestoIdb);
});
