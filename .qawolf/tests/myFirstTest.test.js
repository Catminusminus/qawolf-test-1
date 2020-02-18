const { launch } = require("qawolf");
const selectors = require("../selectors/myFirstTest");

describe('myFirstTest', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://todomvc.com/examples/react" });
  });

  afterAll(() => browser.close());
  
  it('can type into "What needs to be done?" input', async () => {
    await browser.type(selectors[0], "create test!");
  });
  
  it("can Enter", async () => {
    await browser.type(selectors[1], "↓Enter↑Enter");
  });
  
  it("can click input", async () => {
    await browser.click(selectors[2]);
  });
  
  it('can click "Clear completed" button', async () => {
    await browser.click(selectors[3]);
  });
});