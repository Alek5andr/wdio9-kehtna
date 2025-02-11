describe("Kehtna home page", () => {
  it("has 9 menus in total", async () => {
    const baseUrl: string = "https://www.kehtna.edu.ee/et"
    await browser.maximizeWindow()
    await browser.url(baseUrl)
    await expect(browser).toHaveUrl(baseUrl)

    const menus: ReturnType<WebdriverIO.Browser["$$"]> = $$('.desktop-menu>ul>li>a')
    await expect(await menus.length).toEqual(9)

    const expectedMenus: string[] = ['Avaleht', 'Vastuvõtt', 'Meie valdkonnad', 'Õppijale', 'Meie koolist', 'Koolitused', 'Teenused', 'ERASMUS+', 'Kontakt']
    for(let i: number = 0; i < expectedMenus.length; i++) {
      await expect(await menus[i].getText()).toMatch(expectedMenus[i])
    }
  });

  it("has 7 menus with sub-menus", async () => {const menusWithSubMenus: ReturnType<WebdriverIO.Browser["$$"]> = $$('.desktop-menu>ul>li>a[class="special"]')
    await expect(await menusWithSubMenus.length).toEqual(7)
  });

  it("has 38 sub-menus", async () => {
    const subMenus: ChainablePromiseArray = $$('.desktop-menu a[class=" mainOverride"]')
    await expect(await subMenus.length).toEqual(38)
  });
});
