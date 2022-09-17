const assert = require('assert');

Feature('Review Restaurant');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('post a review', async ({ I }) => {
  const reviewText = 'This is a review';

  I.seeElement('.card a');
  I.click(locate('.card-header').first());

  I.seeElement('#info_review');

  I.fillField('#name', 'Dhimas');
  I.fillField('#review', reviewText);
  I.click('button[type="submit"]');

  I.click('.swal-button--confirm');
  // karena error di apinya maka saya comment dulu
  // pause();
  // I.waitForResponse('https://restaurant-api.dicoding.dev/review');
  // const review = locate('#info_review').first();
  // const reviewName = await I.grabTextFrom(review);
  // assert.strictEqual(reviewName, reviewText);
});
