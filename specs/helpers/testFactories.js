import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestaurants: FavoriteRestoIdb,
    restaurant: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
