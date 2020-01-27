import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import renderer from "react-test-renderer";

import SignInScreen from "../screens/SignInScreen";

describe("SignInScreen", () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`renders without crashing`, () => {
    const component = renderer.create(<SignInScreen />);
    const instance = component.root;

    expect(instance).toBeTruthy();
  });
});
