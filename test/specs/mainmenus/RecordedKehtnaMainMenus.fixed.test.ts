describe("Kehtna home page", () => {
  it("has sub-menus", async () => {
    await browser.setWindowSize(1903, 919) // 1 set maximized window
    await browser.url("https://www.kehtna.edu.ee/et") // 2 repeated string/text
    await expect(browser).toHaveUrl("https://www.kehtna.edu.ee/et") // 2

    const menusWithSubMenus: ReturnType<WebdriverIO.Browser["$$"]> = $$('.desktop-menu>ul>li>a[class="special"]')
    await menusWithSubMenus[0].click()
    await menusWithSubMenus[1].click()
    await menusWithSubMenus[2].click()
    await menusWithSubMenus[3].click()
    await menusWithSubMenus[4].click()
    await menusWithSubMenus[5].click()
    await menusWithSubMenus[6].click()
  });
});
