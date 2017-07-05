import { RunMapperPage } from './app.po';

describe('run-mapper App', function() {
  let page: RunMapperPage;

  beforeEach(() => {
    page = new RunMapperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
