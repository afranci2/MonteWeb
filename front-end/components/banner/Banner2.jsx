import React from "react";

const Banner = (props) => {
  return (
    <div>
      {" "}
      <div
        className={` w-full text-center min-h-28 object-cover bg-slate-100 flex ${props.position} justify-center z-50 object-center ${props.color}`}
      >
        <div className="items-center z-0 justify-center flex m-auto">
          {props.children}
  
        </div>
      </div>
    </div>
  );
};

export default Banner;
