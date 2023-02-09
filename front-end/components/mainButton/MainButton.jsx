import React from "react";
import Link from 'next/link'

const MainButton = (props) => {
  return (
    <div className={`${props.buttonPosition==="center" ? "m-auto" : ""} container w-fit`}>
      <Link href={`${props.link}`}> 
        <div className= {`${props.buttonColor ? props.buttonColor : "bg-red-800"} shadow-sm px-12 rounded-lg p-4`}>
          <p className="flex justify-center text-xs font-bold"> {props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default MainButton;