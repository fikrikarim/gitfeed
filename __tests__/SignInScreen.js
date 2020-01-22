import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import renderer from "react-test-renderer";

import SignInScreen from "../screens/SignInScreen";

jest.mock("expo", () => ({
  AppLoading: "AppLoading"
}));

jest.mock("../navigation/AppNavigator", () => "AppNavigator");

describe("SignInScreen", () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`renders the loading screen`, () => {
    const tree = renderer.create(<SignInScreen />).toJSON();
    console.log(tree);
  });
});
