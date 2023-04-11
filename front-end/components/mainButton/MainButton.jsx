import React from "react";
import Link from 'next/link'

const MainButton = (props) => {
  return (
    <div className={`${props.buttonPosition==="center" ? "m-auto" : ""} container w-fit min-w-[100px]`}>
      <Link href={`${props.link}`}> 
        <div className= {`${props.buttonColor ? props.buttonColor : "bg-orange-500 text-white "} p-4 w-fit px-12 rounded-lg min-w-[100px] shadow-sm` }>
          <p className="flex justify-center text-xs font-bold min-w-[100px]"> {props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default MainButton;