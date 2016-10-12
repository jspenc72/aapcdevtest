import { AapcDevTestPage } from './app.po';

describe('aapc-dev-test App', function() {
  let page: AapcDevTestPage;

  beforeEach(() => {
    page = new AapcDevTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
