import React, { Component } from "react";
import classes from "./heroVideo.module.css";

function HeroVideo() {
  return (
    <video id={classes.backgroundVideo} loop autoPlay>
      <source src="./" type="video/mp4" />
      {/* <source src="https://youtu.be/hOpPpc-oECs" type="video/ogg" />
      Your browser does not support the video tag. */}
    </video>
  );
}

export default HeroVideo;
