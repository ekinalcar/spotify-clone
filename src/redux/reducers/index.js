import { enableAllPlugins } from "immer";

import { combineReducers } from "redux";
import spotifyReducer from "./spotify";

enableAllPlugins();

export default combineReducers({
  spotify: spotifyReducer,
});
