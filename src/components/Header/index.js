import React from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./index.css";

const Header = () => {
  const { user } = useSelector((state) => state.spotify);
  const url = user && user["images"] && user["images"][0].url;
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Search for Artists,Songs..." />
      </div>
      <div className="header_right">
        <Avatar alt={user?.display_name} src={url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
