import api from "./base";

export const auth = ({ username, password }) => {
  return api({
    url: `/`,
    method: "GET",
    auth: {
      username,
      password
    }
  });
};
