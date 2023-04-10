import React from "react";
import Link from 'next/link'

const MainButton = (props) => {
  return (
    <div className={`${props.buttonPosition==="center" ? "m-auto" : ""} container w-fit min-w-[100px]`}>
      <Link href={`${props.link}`}> 
        <div className= {`${props.buttonColor ? props.buttonColor : "bg-red-800"} p-4 w-fit px-12 rounded-lg min-w-[100px] shadow-sm` }>
          <p className="flex justify-center text-xs font-semibold min-w-[100px]"> {props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default MainButton;