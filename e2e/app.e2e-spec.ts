import { HeroPage } from './app.po';

describe('hero App', () => {
  let page: HeroPage;

  beforeEach(() => {
    page = new HeroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
