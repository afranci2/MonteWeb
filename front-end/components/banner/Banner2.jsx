import React from "react";

const Banner = (props) => {
  return (
    <div>
      {" "}
      <div
        className={` w-full text-center min-h-28 object-cover bg-gray-200 flex ${props.position} justify-center z-40 object-center ${props.color}`}
      >
        <div className="items-center justify-center flex m-auto">
          {props.children}
  
        </div>
      </div>
    </div>
  );
};

export default Banner;
