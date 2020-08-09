import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import { useSelector, useDispatch } from "react-redux";
import { getTokenFromResponse } from "./utils/spotify";

import { setUser } from "./redux/actions/spotify";

import Login from "./components/Login/";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

const App = () => {
  const { user, playlists, playing, item } = useSelector(
    (state) => state.spotify
  );
  const dispatch = useDispatch();

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch(setUser(user));
        console.log(user);
      });
    }
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;
