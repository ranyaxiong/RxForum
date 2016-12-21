import { RxForumPage } from './app.po';

describe('rx-forum App', function() {
  let page: RxForumPage;

  beforeEach(() => {
    page = new RxForumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
