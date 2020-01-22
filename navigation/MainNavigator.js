import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import { RepoList, RepoDetails } from "../constants/screens";
import RepoListScreen from "../screens/RepoListScreen";
import RepoDetailsScreen from "../screens/RepoDetailsScreen";
import { logout } from "../api";

const MainNavigator = createStackNavigator(
  {
    [RepoList]: RepoListScreen,
    [RepoDetails]: RepoDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerRight: () => <Button onPress={logout} title="logout" />
    }
  }
);

export default MainNavigator;
