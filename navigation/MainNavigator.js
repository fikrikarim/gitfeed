import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { RepoList, RepoDetails } from "../constants/screens";
import RepoListScreen from "../screens/RepoListScreen";
import RepoDetailsScreen from "../screens/RepoDetailsScreen";

const MainNavigator = createStackNavigator({
  [RepoList]: RepoListScreen,
  [RepoDetails]: RepoDetailsScreen
});

export default MainNavigator;
