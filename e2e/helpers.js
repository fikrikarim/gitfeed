// This should be done automatically without manually typing
// I spent hours trying to use asynstorage here. But always got
// [@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.
// [@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.
export const login = async () => {
  await element(by.id("githubUsername")).typeText("gitfeedtest");
  await element(by.id("nextButton")).tap("");
  await element(by.id("githubPassword")).typeText("thisisthecorrectpassword");
  await element(by.id("loginButton")).tap("");
};
