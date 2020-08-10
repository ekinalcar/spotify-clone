import { SET_USER, SET_TOKEN, SET_PLAYLISTS } from "./types";

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

const setPlaylists = (playlists) => {
  return {
    type: SET_PLAYLISTS,
    playlists,
  };
};

export { setUser, setToken, setPlaylists };
