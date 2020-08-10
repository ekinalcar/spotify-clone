import React from "react";
import { useSelector } from "react-redux";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Header from "../Header";
import Song from "../Song";
import "./index.css";

const Body = () => {
  const { discoverWeekly } = useSelector((state) => state.spotify);
  return (
    <div className="body">
      <Header />

      <div className="body_info">
        <img
          src={
            discoverWeekly &&
            discoverWeekly["images"] &&
            discoverWeekly["images"][0].url
          }
          alt=""
        />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discoverWeekly &&
          discoverWeekly["tracks"] &&
          discoverWeekly["tracks"].items.map((item, i) => (
            <Song key={i} track={item.track} />
          ))}
      </div>
    </div>
  );
};

export default Body;
