import nightmare from 'nightmare'

describe('Update Post', () => {

  beforeEach(() => {
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('update the post page', async () => {
    let page = nightmare().goto('http://localhost:3001')
    .click("a[href='post/1']")
    .wait(".postEdit")
    .click(".postEdit")
    .wait(".cancelEdit")
    .insert("input[name='author']", "")
    .insert("input[name='author']", "new author")
    .click("input.button[type='submit']")
    .wait(".postEdit")
    .refresh()
    let text = await page.evaluate(
      () => document.querySelector('.label.author div').innerHTML)
    .end()
    expect(text).toContain("new author")
  });
});
