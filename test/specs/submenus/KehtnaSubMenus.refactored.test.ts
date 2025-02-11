describe("Kehtna home page", () => {
  before(async () => {
    const baseUrl: string = "https://www.kehtna.edu.ee/et"
    await browser.maximizeWindow()
    await browser.url(baseUrl)
  });

  it("has 7 menus with sub-menus", async () => {
    const menusWithSubMenus: ReturnType<WebdriverIO.Browser["$$"]> = $$('.desktop-menu>ul>li>a[class="special"]')
    await expect(await menusWithSubMenus.length).toEqual(7)
  });

  it("has 38 sub-menus", async () => {
    const subMenus: ChainablePromiseArray = $$('.desktop-menu a[class=" mainOverride"]')
    await expect(await subMenus.length).toEqual(38)
  });
});
