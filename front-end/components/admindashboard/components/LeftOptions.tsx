"use client"
import React, {useState} from "react";

const LeftOptions = () => {
    const [option, setOption] = useState()
    function clickHandler(e){
        console.log("click")
    }
  return (
    <div>
      {" "}
      <div className="h-full w-full bg-black">
        <div onClick={clickHandler} className="w-full  bg-white border-b-2">
          <p className="py-12 m-auto text-center ">jwnefkjnew</p>
        </div>
        <div onClick={clickHandler} className="w-full  bg-white border-b-2">
          <p className="py-12 m-auto text-center ">jwnefkjnew</p>
        </div>
      </div>
    </div>
  );
};

export default LeftOptions;
