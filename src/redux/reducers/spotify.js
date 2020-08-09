import produce from "immer";

import { TEST } from "../actions/types";

const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const sensor = produce((draft, action) => {
  const { type } = action;
  if (type === TEST) {
    draft.data = ["GELDIK"];
    return;
  }
  return draft;
}, initialState);

export default sensor;
