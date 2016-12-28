import { AotappPage } from './app.po';

describe('aotapp App', function() {
  let page: AotappPage;

  beforeEach(() => {
    page = new AotappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
