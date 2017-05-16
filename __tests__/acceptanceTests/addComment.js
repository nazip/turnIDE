import nightmare from 'nightmare';

describe('Comment for Post', () => {

  let night_mare;

  beforeEach( () => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    night_mare = nightmare()
    .goto('http://localhost:3001')
    .click("a[href='post/1']")
    .wait(".addComment")
    .click(".addComment")
    .wait(".cancelComment")
  });

  afterEach(() => {
    night_mare.end();
  });

  it('add the comment to the post', async () => {
    let page = night_mare
    .insert("input[name='comment']", "new comment")
    .click("input.button[type='submit']")
    .wait(".addComment");
    let text = await page.evaluate(() => document.querySelector(
      'div.comments > .comment:last-child .basic.label').innerHTML)
    .end();
    expect(text).toContain("new comment");
  });

  it('validation the comment text', async () => {
    let page = night_mare
    .insert("input[name='comment']", "12")
    .insert("input[name='phone']", "1")
    let text = await page
    .evaluate(() => document.querySelector('div.error > .red').innerHTML)
    .end();
    expect(text).toContain("length must be more 3 letter");
  });

  it('warning for the comment text', async () => {
    let page = night_mare
    .insert("input[name='comment']", "123")
    .insert("input[name='phone']", "1")
    let text = await page
    .evaluate(() => document.querySelector('div.yellow.label').innerHTML)
    .end()
    expect(text).toContain("length should be more 5 letter");
  });

  it('short comment can not be posted', async () => {
    let page = night_mare
    .insert("input[name='comment']", "12")
    .click("input.button[type='submit']")
    let text = await page
    .evaluate(() => document.querySelector(
      'div.comments > .comment:last-child .basic.label').innerHTML)
    .end()
    expect(text).not.toContain("12");
  });
});
