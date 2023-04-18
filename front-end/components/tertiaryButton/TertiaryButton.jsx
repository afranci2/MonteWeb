import React from "react";
import Link from "next/link";

const TertiaryButton = (props) => {
  return (
    <div
      className={` ${props.position === "center" && "m-auto w-full"} ${
        props.margin
      } flex justify-center max-h-fit w-full  rounded-md  ${props.buttonColor} drop-shadow-sm`}
    >
      {props.buttonLink ? (
        <Link href={props.buttonLink ? props.buttonLink : null}>
          <div
            className={`m-auto h-full min-w-[50px] justify-center p-4  w-full  `}
          >
            <p className="overflow-hidden flex justify-center text-xs font-semibold text-center w-full">
              {" "}
              {props.text}
            </p>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default TertiaryButton;
