import React from "react";
import Link from "next/link";

const TertiaryButton = (props) => {
  return (
    <div
      className={` ${props.position === "center" && "m-auto"} ${
        props.margin
      } flex justify-center max-h-fit w-full drop-shadow-sm`}
    >
      {props.buttonLink ? (
        <Link href={props.buttonLink ? props.buttonLink : null}>
          <div
            className={`m-auto h-full rounded-lg ${props.buttonColor} min-w-[50px] justify-center p-4 px-8 w-full text-black `}
          >
            <p className="overflow-hidden flex justify-center text-xs font-semibold text-center ">
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
