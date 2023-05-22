"use client";

import React from "react";
import "./video.css";

const Video = (props) => {
  return (
    <div className="absolute z-10  h-screen mx-auto overflow-hidden">
      <div className="bg-stone-700/30  h-full w-full absolute"></div>
      <video
        className="try h-full  max-w-full overflow-hidden w-screen object-cover mx-auto"
        autoPlay
        muted
        loop
        playsInline
        src={props.video}
        type="video/mp4"
      />
    </div>
  );
};

export default Video;
