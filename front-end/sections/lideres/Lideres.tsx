import React from "react";
import LideresTab from "../../components/tab/liderestab/LideresTab";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg"

const Lideres = () => {
  return (
    <div>
      <div className="top"></div>
      <div className="leader">
        <LideresTab image={Pastor} heading="Rev. Samuel Francisco" subheading="Presidente" />
      </div>
      <div className="button"></div>
    </div>
  );
};

export default Lideres;
