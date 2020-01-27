describe("When user open the app", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should show the authentication screen", async () => {
    await expect(element(by.text("Login via Github"))).toBeVisible();
  });

  it("should show the password field after entering username", async () => {
    await element(by.id("githubUsername")).typeText("testusername");
    await element(by.id("nextButton")).tap("");
    await expect(element(by.id("githubPassword"))).toBeVisible();
  });
});
