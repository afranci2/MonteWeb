import React from "react";
import Navbar from "../../sections/navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-auto w-1/2 object-cover">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F346427029456851%2Fvideos%2F1360362058086258%2F&width=1280"
          width="1280"
          height="720"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default page;
