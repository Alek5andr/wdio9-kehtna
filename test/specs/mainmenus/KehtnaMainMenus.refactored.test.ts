describe("Kehtna home page", () => {
  it("has menus", async () => {
    const baseUrl: string = "https://www.kehtna.edu.ee/et"
    await browser.maximizeWindow()
    await browser.url(baseUrl)
    await expect(browser).toHaveUrl(baseUrl)

    const menus: ReturnType<WebdriverIO.Browser["$$"]> = $$('.desktop-menu>ul>li>a')
    const expectedMenus: string[] = ['Avaleht', 'Vastuvõtt', 'Meie valdkonnad', 'Õppijale', 'Meie koolist', 'Koolitused', 'Teenused', 'ERASMUS+', 'Kontakt']
    for(let i: number = 0; i < expectedMenus.length; i++) {
      await expect(await menus[i].getText()).toMatch(expectedMenus[i])
    }
  });
});
