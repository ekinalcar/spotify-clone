import produce from "immer";
import { SET_USER, SET_TOKEN } from "../actions/types";

const initialState = {
  user: null,
  token:
    "BQDWTjjy2qwTUogZd-EyQrbu2tznhBujlnBQeqePx6-M4P6N4E7FH94n4GFY3DpVulWRuv16_mxsXee6XhzbyiW2saFfBOhKxS5vE8pHoU1JE9FWifnm8uBU_qsYV1QzsvLF8BYgHbpMlOH4NTDf8hgJP53HjfU",
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
