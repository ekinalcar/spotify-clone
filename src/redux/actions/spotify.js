import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
} from "./types";

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

const setDiscoverWeekly = (discoverWeekly) => {
  return {
    type: SET_DISCOVER_WEEKLY,
    discoverWeekly,
  };
};

export { setUser, setToken, setPlaylists, setDiscoverWeekly };
