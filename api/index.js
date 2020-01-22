import api from "./base";

export const login = async ({ username, password }) => {
  try {
    await api({
      url: `/`,
      method: "GET",
      auth: {
        username,
        password
      }
    });

    // Set default auth for future API calls
    api.defaults.auth = { username, password };
  } catch (error) {
    if (error.response.status === 401) {
      throw "Username or password combination doesn't match :(";
    }

    throw error.message;
  }
};
