describe("Kehtna home page", () => {
    let menus: ReturnType<WebdriverIO.Browser["$$"]>
    let menusWithSubMenus: ReturnType<WebdriverIO.Browser["$$"]>

    before(async () => {
        const baseUrl: string = "https://www.kehtna.edu.ee/et"
        await browser.maximizeWindow()
        await browser.url(baseUrl)

        menus = $$('.desktop-menu>ul>li>a')
        menusWithSubMenus = $$('.desktop-menu>ul>li>a[class="special"]')
    });

    it("has 9 valid menus", async () => {
        const expectedMenus: string[] = ['Avaleht', 'Vastuvõtt', 'Meie valdkonnad', 'Õppijale', 'Meie koolist', 'Koolitused', 'Teenused', 'ERASMUS+', 'Kontakt']
        for(let i: number = 0; i < expectedMenus.length; i++) {
            await expect(await menus[i].getText()).toMatch(expectedMenus[i])
        }
    });

    it("has 38 valid sub-menus", async () => {
        const expectedSubMenus: string[][] = [
            ['Vastuvõtt 24/25', 'Vastuvõtu üldsätted'],
            ['Ehitusvaldkond', 'IT-valdkond', 'Tehnikavaldkond', 'Toitlustusvaldkond', 'Üldharidus (7.-12.klass)', 'Kutsevaliku aasta'],
            ['Tunniplaanid ja konsultatsioonid', 'Akadeemiline kalender', 'Õppetöögraafik', 'Õppetöö dokumendid, juhendid', 'Toetused', 'Sündmuste kalender', 'Esmakursuslasele', 'Õpilaskodu', 'Arstiabi'],
            ['Üldinfo', 'Missioon, visioon ja väärtused', 'Kooli juhtimine', 'Kooli struktuur', 'Avalikud dokumendid', 'Hanked', 'Tule tööle', 'Eksamikeskused', 'Kehtna KHK toetab ettevõtteid rohepöörde läbiviimisel', 'Õppekeskkondade uuendamine'],
            ['Kõik koolitused'],
            ['Autokool', 'Catering', 'Koolitoit/bistroo', 'Majutus', 'Ruumide rent', 'Õpperestoran Neljapäev'],
            ['Kontaktid', 'Üldkontaktiddd']
        ]

        for(let i: number = 0; i < await menusWithSubMenus.length; i++) {
            let array: Array<WebdriverIO.Element> = []
            await menusWithSubMenus[i].click()
            const subMenus: ChainablePromiseArray = $$('.desktop-menu a[class=" mainOverride"]')
            for(const element of await subMenus.getElements()) {
                // console.log(await element.getText()) // Show why it takes quite long
                if(await element.isDisplayed()) array.push(element)
            }
            for(let j: number = 0; j < expectedSubMenus[i].length; j++) await expect(await array[j].getText()).toMatch(expectedSubMenus[i][j])
        }
    });
});
