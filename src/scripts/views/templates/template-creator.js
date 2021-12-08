import CONFIG from '../../globals/config';

const restoDetailTemplate = (restaurant) => `
    <div class="detail-resto">
        <tabindex="0" div class="image-container">
            <img class="resto-image" src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}" alt="${restaurant.name}"/>
        </div>
        <ul tabindex="0" class="resto-info">
            <li>
                <i class="fas fa-store icon-info"></i>
                <p class="resto-name">${restaurant.name}</p>
            </li>
            <li>
                <i class="fas fa-map-marker-alt icon-info"></i>
                <p class="resto-name">${restaurant.address}, ${restaurant.city}</p>
            </li>
            <li>
                <i class="fas fa-star icon-info"></i>
                <p class="resto-name">${restaurant.rating}</p>
            </li>
            <li>
                <h4>Deskripsi</h4>
                <p class="resto-desc">${restaurant.description}</p>
            </li>
            <li>
            <p class="resto-category">Kategori:</p>            
            ${restaurant.categories
    .map((category) => `
                    <span class="category">${category.name}</span>
                `)
    .join('')}               
            </li>
        <ul>

        <h4 tabindex="0">Menu</h4>
        
        <div class="resto-menu">
            <div class="resto-food">
                <h5 tabindex="0">Makanan</h5>
                <ul>
                    ${restaurant.menus.foods
    .map((food, i) => `
                        <li><p>${i + 1}) ${food.name}</p></li>
                        `)
    .join('')}
                </ul>
            </div>
            <div class="resto-drink">
                <h5 tabindex="0">Minuman</h5>
                <ul>
                ${restaurant.menus.drinks
    .map((drink, i) => `
                    <li><p>${i + 1}) ${drink.name}</p></li>
                    `)
    .join('')}
                </ul>
            </div>
        </div>

        <h4 tabindex="0">Reviews</h4>

        <div class="resto-reviews">
            ${restaurant.customerReviews
    .map((review) => `
                <div class="resto-review-item">
                    <div class="review-header">
                        <p class="review-name">${review.name}</p>
                        <p class="review-date">${review.date}</p>
                    </div>
                    <div class="review-body">
                        ${review.review}
                    </div>
                </div>
                `)
    .join('')
}
        </div>
    </div>
`;

const restoItemTemplate = (restaurant) => `
    <article>
        <p tabindex="0" class="post-item__city">${restaurant.city}</p>
        <img tabindex="0" class="post-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MD + restaurant.pictureId}" alt="${restaurant.name} Picture">
        <div tabindex="0" class="post-item__content">
            <p class="post-item__rating"><i class="fas fa-star" style="color: gold"></i> ${restaurant.rating}</p>
            <h4 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h4>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fas fa-heart icon-heart" aria-hidden="true"></i>
    </button>
`;

export {
  restoDetailTemplate,
  restoItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
