import React from "react";
import Navbar from "../../sections/navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="h-auto w-1/2 object-cover">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsootheshopstore%2Fvideos%2F234278578980002%2F&width=1280"
          width="1280"
          height="720"
          scrolling="no"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </div>
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Felmontesinai.org%2Fvideos%2F2579120898797002%2F&show_text=false&width=560&t=0"
        width="560"
        height="314"
        scrolling="no"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default page;
