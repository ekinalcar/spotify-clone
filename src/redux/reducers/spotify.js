import produce from "immer";
import { SET_USER, SET_TOKEN } from "../actions/types";

const initialState = {
  user: null,
  token: null,
  playlists: [],
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
  return draft;
}, initialState);

export default spotify;
