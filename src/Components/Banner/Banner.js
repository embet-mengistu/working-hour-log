import React from "react";
import "./Banner.css";

import bannerImage from "../../assets/banner.jpg";
function Banner() {
  return (
    <div className="bannerImage">
      <div className="bannerContainer">
        <h1>Welcome</h1>
        <p>
          Please log in if you already have an account, or sign up for a new
          one!
        </p>
      </div>
    </div>
  );
}

export default Banner;
