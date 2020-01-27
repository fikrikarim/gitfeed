import AsyncStorage from "@react-native-community/async-storage";

import {
  CHECK_IS_LOGGED_IN_STARTED,
  CHECK_IS_LOGGED_IN_FINISHED
} from "../constants/actions";
import { auth as authKey } from "../constants/storage";

export const checkIsLoggedIn = () => {
  return async dispatch => {
    dispatch({ type: CHECK_IS_LOGGED_IN_STARTED });

    credential = await AsyncStorage.getItem(authKey);

    if (credential) {
      dispatch({
        type: CHECK_IS_LOGGED_IN_FINISHED,
        payload: { isLoggedIn: true, username: credential.username }
      });
    } else {
      dispatch({
        type: CHECK_IS_LOGGED_IN_FINISHED,
        payload: { isLoggedIn: false }
      });
    }
  };
};
