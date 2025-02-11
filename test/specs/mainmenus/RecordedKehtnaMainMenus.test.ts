describe("Kehtna home page", () => {
  it("has sub-menus", async () => {
    await browser.setWindowSize(1903, 919)
    await browser.url("https://www.kehtna.edu.ee/et")
    await expect(browser).toHaveUrl("https://www.kehtna.edu.ee/et")
    await browser.$("aria/Vastuvõtt 󰍝").click()
    await browser.$("aria/Meie valdkonnad").click()
    await browser.$("aria/Õppijale").click()
    await browser.$("aria/Meie koolist").click()
    await browser.$("aria/Koolitused").click()
    await browser.$("aria/Teenused").click()
    await browser.$("aria/Kontakt").click()
  });
});
