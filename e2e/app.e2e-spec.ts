import { DogApiPage } from './app.po';

describe('dog-api App', () => {
  let page: DogApiPage;

  beforeEach(() => {
    page = new DogApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
