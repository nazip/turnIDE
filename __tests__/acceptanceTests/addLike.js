import nightmare from 'nightmare';

describe('Like for Post', () => {

  beforeEach( () => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('add Like to Post', async () => {
    let page = nightmare()
    .goto('http://localhost:3001')
    .click("a[href='post/1']")
    .wait('.postEdit');
    let currentLike = await page.evaluate(() =>
      document.querySelector('a.Like').innerHTML
    );
    let changeLike = await page.click("button.setLike").wait(500);
    let newLike = await page.evaluate(() =>
      document.querySelector('a.Like').innerHTML)
    .end();
    expect(newLike).not.toEqual(currentLike);
  });

});
