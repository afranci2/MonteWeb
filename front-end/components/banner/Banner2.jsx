import React from "react";

const Banner = (props) => {
  return (
    <div>
      {" "}
      <div
        className={`${props.color} w-full text-center h-28 object-cover bg-yellow-500 flex ${props.position} justify-center z-50 object-center`}
      >
        <div className="items-center z-0 justify-center flex m-auto">
          {props.children}
  
        </div>
      </div>
    </div>
  );
};

export default Banner;
