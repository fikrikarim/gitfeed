import {
  CHECK_IS_LOGGED_IN_STARTED,
  CHECK_IS_LOGGED_IN_FINISHED
} from "../constants/actions";

const INITIAL_STATE = {
  isLoggedIn: null
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_IS_LOGGED_IN_STARTED:
      return { ...state };

    case CHECK_IS_LOGGED_IN_FINISHED:
      const { isLoggedIn, username } = action.payload;

      return { ...state, isLoggedIn, username };

    default:
      return state;
  }
};

export default auth;
