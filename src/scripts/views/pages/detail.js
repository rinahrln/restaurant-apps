import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import RestoSource from '../../data/resto-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { restoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <h3 tabindex="0" class="detail_label">Detail Restaurant</h3>
    <div class="detail">                
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('.detail');
    restaurantContainer.innerHTML = restoDetailTemplate(restaurant.restaurant);

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  },
};

export default Detail;
