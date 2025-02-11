describe("Kehtna home page", () => {
  it("has menus", async () => {
    const baseUrl: string = "https://www.kehtna.edu.ee/et"
    await browser.maximizeWindow()
    await browser.url(baseUrl)
    await expect(browser).toHaveUrl(baseUrl)

    const menusWithSubMenus: ReturnType<WebdriverIO.Browser["$$"]> = $$('.desktop-menu li>a[aria-expanded]')
    await menusWithSubMenus[0].click()
    await browser.debug()
    await menusWithSubMenus[1].click()
    await browser.debug()
    await menusWithSubMenus[2].click()
    await browser.debug()
    await menusWithSubMenus[3].click()
    await browser.debug()
    await menusWithSubMenus[4].click()
    await browser.debug()
    await menusWithSubMenus[5].click()
    await browser.debug()
    await menusWithSubMenus[6].click()
    await browser.debug()
  });
});
