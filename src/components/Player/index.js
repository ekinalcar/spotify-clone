import React from "react";
import Sidebar from "../Sidebar";
import Body from "../Body";
import Footer from "../Footer";

import "./index.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotfiy={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
