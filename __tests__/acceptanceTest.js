import nightmare from 'nightmare'

describe('When visiting the homepage', () => {
  it('show all posts', async () => {
    let page = nightmare().goto('http://localhost:3001')

    let text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('My first React blog')
  });

  it('visit to post page', asinc () => {
    nightmare()
    .goto('http://localhost:3001')
    .click("a[href='post/1']")
    .

  });




});
