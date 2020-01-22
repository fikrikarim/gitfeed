import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import { Main, Auth, SignIn } from "../constants/screens";

export default createAppContainer(
  createSwitchNavigator({
    [Auth]: AuthLoadingScreen,
    [Main]: MainTabNavigator,
    [SignIn]: SignInScreen
  })
);
