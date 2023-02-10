import React from "react";
import Link from "next/link";

const SecondaryButton = (props) => {
  return (
    <div className=" w-full flex justify-center m-auto py-4">
      <Link href={props.buttonLink}>
        <div
          className={
            "m-auto rounded-md bg-white justify-center p-4 w-fit px-12 text-black shadow-sm"
          }
        >
          <p className="flex justify-center text-xs font-bold"> {props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default SecondaryButton;
