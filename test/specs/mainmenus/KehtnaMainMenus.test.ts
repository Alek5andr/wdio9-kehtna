describe("Kehtna home page", () => {
  it("has menus", async () => {
    const baseUrl: string = "https://www.kehtna.edu.ee/et"
    await browser.maximizeWindow()
    await browser.url(baseUrl)
    await expect(browser).toHaveUrl(baseUrl)

    const menus: ReturnType<WebdriverIO.Browser["$$"]> = $$('.desktop-menu>ul>li>a')
    await expect(await menus[0].getText()).toMatch('Avaleht')
    await expect(await menus[1].getText()).toMatch('Vastuvõtt')
    await expect(await menus[2].getText()).toMatch('Meie valdkonnad')
    await expect(await menus[3].getText()).toMatch('Õppijale')
    await expect(await menus[4].getText()).toMatch('Meie koolist')
    await expect(await menus[5].getText()).toMatch('Koolitused')
    await expect(await menus[6].getText()).toMatch('Teenused')
    await expect(await menus[7].getText()).toMatch('ERASMUS+')
    await expect(await menus[8].getText()).toMatch('Kontakt')
  });
});
