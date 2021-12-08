import RestoSource from '../../data/resto-source';
import { restoItemTemplate } from '../templates/template-creator';

const AllResto = {
  async render() {
    return `    
    <section tabindex="0" class="content">
        <div class="explore">
            <h3 tabindex="0" class="explore_label">Explore Restaurant</h3>
            <div class="posts">                
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestoSource.allResto();
    const restaurantsContainer = document.querySelector('.posts');
    restaurants.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restoItemTemplate(restaurant);
    });

    const hero = document.querySelector('.hero');
    hero.style.display = 'flex';
  },
};

export default AllResto;
