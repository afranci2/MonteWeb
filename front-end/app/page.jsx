import React from "react";
import "../styles/globals.css";

import Navbar from "../sections/navbar/Navbar";
import Header from '../sections/header/Header'
const HeroVideo = "https://monte-assets.s3.amazonaws.com/video/church+intro+video.mp4"
const Logo = "https://monte-assets.s3.amazonaws.com/logo/logo.png"

const page = () => {
  return (
    <div>
      <Navbar />
      <Header video={HeroVideo}>
        <img
          className='h-2/6 w-auto flex place-content-center justify-center absolute m-auto z-40 md:h-80 md:w-auto'
          src={Logo}
        />
      </Header>
      <Header video={HeroVideo}>
        <img
          className='h-2/6 w-auto flex place-content-center justify-center m-auto z-40 md:h-80 md:w-auto'
          src={Logo}
        />
      </Header>
    </div>
  );
};

export default page;
