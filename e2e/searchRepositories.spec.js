import { login } from "./helpers";

describe("When user is logged in", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  beforeAll(async () => {
    await login();
  });

  it("user can search details for repositories", async () => {
    await expect(element(by.id("logoutButton"))).toBeVisible();
    // Default search value of facebook/react-native
    await expect(element(by.text("facebook/react-native"))).toBeVisible();

    await element(by.id("searchButton")).tap();

    await expect(element(by.id("commitList"))).toBeVisible();
  });

  it("user can type any repositories to search for the repo details", async () => {
    await expect(element(by.text("facebook/react-native"))).toBeVisible();
    await element(by.id("searchBar")).replaceText("fikrikarim/hnpopquiz");

    await element(by.id("searchButton")).tap();

    await expect(element(by.id("commitList"))).toBeVisible();
  });

  it("shows repo not found if user type wrong repository", async () => {
    await expect(element(by.text("facebook/react-native"))).toBeVisible();
    await element(by.id("searchBar")).replaceText("fikrikarim/ultrasecretrepo");

    await element(by.id("searchButton")).tap();

    await expect(element(by.id("commitList"))).toBeNotVisible();
    await expect(element(by.text("Repository not found"))).toBeVisible();
  });
});
