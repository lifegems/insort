import { InsortPage } from './app.po';

describe('insort App', function() {
  let page: InsortPage;

  beforeEach(() => {
    page = new InsortPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
