const assert = require('assert');

Feature('Favorite Restaurant');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
    I.amOnPage('/#/favorite');
    });

const emptyFavorite = 'There is no favorite restaurant yet';

Scenario('showing empty favorite restaurant', ({ I }) => {
    I.seeElement('#explore-restaurant');
    I.see(emptyFavorite, '#explore-restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see(emptyFavorite, '#explore-restaurant');
    I.amOnPage('/');
    I.seeElement('.card a');
    const firstRestaurant = locate('.card-header').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card a');
    const likedRestaurantTitle = await I.grabTextFrom('.card-header');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card a');
    const firstRestaurant = locate('.card-header').first();
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.click('.swal-button--confirm');

    I.amOnPage('/#/favorite');
    I.seeElement('.card a');
    const firstRestaurantTitle = locate('.card-header').first();
    I.click(firstRestaurantTitle);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see(emptyFavorite, '#explore-restaurant');
});