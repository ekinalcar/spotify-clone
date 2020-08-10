import produce from "immer";
import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
} from "../actions/types";

const initialState = {
  user: null,
  token: null,
  playlists: [],
  discoverWeekly: {},
  playing: false,
  item: null,
};

const spotify = produce((draft, action) => {
  const { type } = action;
  if (type === SET_USER) {
    const { user } = action;
    draft.user = user;
    return;
  }
  if (type === SET_TOKEN) {
    const { token } = action;
    draft.token = token;
    return;
  }
  if (type === SET_PLAYLISTS) {
    const { playlists } = action;
    draft.playlists = playlists;
    return;
  }
  if (type === SET_DISCOVER_WEEKLY) {
    const { discoverWeekly } = action;
    draft.discoverWeekly = discoverWeekly;
    return;
  }
  return draft;
}, initialState);

export default spotify;
