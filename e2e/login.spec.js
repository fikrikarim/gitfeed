describe("When user tries to login", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("with wrong password, shows 'username/password doesn't match' error", async () => {
    await element(by.id("githubUsername")).typeText("gitfeedtest");
    await element(by.id("nextButton")).tap("");
    await element(by.id("githubPassword")).typeText("wrongpassword");
    await element(by.id("loginButton")).tap("");
    await expect(
      element(by.text("Username and password combination doesn't match :("))
    ).toBeVisible();
  });

  it("with correct password, shows the explore repositories screen", async () => {
    await element(by.id("githubUsername")).typeText("gitfeedtest");
    await element(by.id("nextButton")).tap("");
    await element(by.id("githubPassword")).typeText("thisisthecorrectpassword");
    await element(by.id("loginButton")).tap("");
    await expect(element(by.text("Explore repositories"))).toBeVisible();
  });
});
