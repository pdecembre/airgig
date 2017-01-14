import { AirgigPage } from './app.po';

describe('airgig App', function() {
  let page: AirgigPage;

  beforeEach(() => {
    page = new AirgigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
