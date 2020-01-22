import api from "./base";
import { AsyncStorage } from "react-native";

import { auth as authKey } from "../constants/storage";
import { Auth as AuthScreen } from "../constants/screens";
import NavigationService from "../navigation/NavigationService";

export const login = async ({ username, password }) => {
  try {
    credentials = { username, password };

    await api({
      url: `/`,
      method: "GET",
      auth: credentials
    });

    // Set auth on localStorage
    await AsyncStorage.setItem(authKey, JSON.stringify(credentials));

    // Set default auth for future API calls
    api.defaults.auth = { username, password };
  } catch (error) {
    if (error.response.status === 401) {
      throw "Username or password combination doesn't match :(";
    }

    // console.log("error.message");
    throw error.message;
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem(authKey);
    NavigationService.navigate(AuthScreen);
  } catch (error) {
    console.error(error.message);
  }
};
