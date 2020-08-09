import produce from "immer";
import { SET_USER } from "../actions/types";

const initialState = {
  user: null,
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
  return draft;
}, initialState);

export default spotify;
