const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavRestaurantText = 'Your Favorite Restaurant Is Empty';

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('.posts');
  I.see(emptyFavRestaurantText, '.explore_label');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavRestaurantText, '.explore_label');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('article');
  const likedRestaurantName = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  /* Menglike restaurant terlebih dahulu */
  I.see(emptyFavRestaurantText, '.explore_label');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('article');
  const likedRestaurantName = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  /* Mengunlike restaurant */
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.posts');
  I.dontSeeElement('.post-item__content');
  I.dontSeeElement('.post-item__title');
});
