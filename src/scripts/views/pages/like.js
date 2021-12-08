import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { restoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <section tabindex="0" class="content">
            <div class="explore">
                <h3 tabindex="0" class="explore_label">Your Favorite Restaurant</h3>
                <div class="posts">                
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.posts');
    const exploreLabelText = document.querySelector('.explore_label');

    if (restaurants.length === 0) {
      exploreLabelText.innerHTML = `
        Your Favorite Restaurant Is Empty
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restoItemTemplate(restaurant);
    });

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  },
};

export default Like;
