import { AngularAnonymousPage } from './app.po';

describe('angular-anonymous App', () => {
  let page: AngularAnonymousPage;

  beforeEach(() => {
    page = new AngularAnonymousPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
