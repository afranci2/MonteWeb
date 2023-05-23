import React from "react";

const Banner = (props) => {
  return (
    <div>
      {" "}
      <div className={`${props.color} p-12 text-center flex ${props.position} services m-auto justify-center h-auto w-full absolute z-40 drop-shadow-3xl`}>
{props.children}
      </div>
    </div>
  );
};

export default Banner;
