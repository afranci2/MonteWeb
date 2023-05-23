import React from "react";
import Link from "next/link";

const SecondaryButton = (props) => {
  return (
    <div className=" flex justify-center m-auto py-4 min-w-[200px]">
      {props.buttonLink ? (
        <Link href={props.buttonLink}>
          <div
            className={
              "m-auto rounded-md bg-gray-100 justify-center min-w-[200px] p-4 w-fit px-6   text-black "
            }
          >
            <p className="flex justify-center text-xs font-semibold">
              {" "}
              {props.text}
            </p>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default SecondaryButton;
