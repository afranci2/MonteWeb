import React from "react";

const ChurchBanner = (props) => {
  return (
    <div>
      {" "}
      <div
        className={` w-full text-center min-h-28 object-cover flex ${props.position} z-40 object-center bg-yellow-400 `}
      >
        <div className="items-center ">
          {props.children}
  
        </div>
      </div>
    </div>
  );
};

export default ChurchBanner;
