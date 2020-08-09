import React from "react";
import { accessUrl } from "../../utils/spotify";
import "./index.css";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Logo"
      />
      <a href={accessUrl}>Login With Spotify</a>
    </div>
  );
};

export default Login;
