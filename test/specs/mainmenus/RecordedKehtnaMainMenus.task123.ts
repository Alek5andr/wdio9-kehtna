describe("Kehtna home page", () => {
  it("has sub-menus", async () => { // 0 Rename test to correspond to its verification
    await browser.setWindowSize(1903, 919) // 1 set maximized window
    await browser.url("https://www.kehtna.edu.ee/et") // 2 repeated string/text
    await expect(browser).toHaveUrl("https://www.kehtna.edu.ee/et") // 2
    await browser.$("aria/Vastuvõtt 󰍝").click() // 3 fix selector
    await browser.$("aria/Meie valdkonnad").click() // 3
    await browser.$("aria/Õppijale").click() // 3
    await browser.$("aria/Meie koolist").click() // 3
    await browser.$("aria/Koolitused").click() // 3
    await browser.$("aria/Teenused").click() // 3
    await browser.$("aria/Kontakt").click() // 3
  });
});
