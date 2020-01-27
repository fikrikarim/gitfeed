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
    if (error.response && error.response.status === 401) {
      throw new Error("Username and password combination doesn't match :(");
    }

    throw error;
  }
};

export const getCommits = async ({ repository }) => {
  try {
    const [owner, repo] = repository.split("/");

    const response = await api({
      url: `/repos/${owner}/${repo}/commits`,
      method: "GET"
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Repository not found");
    }

    throw error;
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
