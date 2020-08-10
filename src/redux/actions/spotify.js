import { SET_USER, SET_TOKEN } from "./types";

const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export { setUser, setToken };
