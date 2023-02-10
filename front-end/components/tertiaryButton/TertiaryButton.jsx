import React from "react";
import Link from "next/link";

const TertiaryButton = (props) => {
  return (
    <div
      className={` ${props.position === "center" && "m-auto"} ${
        props.margin
      } flex justify-center max-h-fit w-fit drop-shadow-md`}
    >
      {props.buttonLink ? (
        <Link href={props.buttonLink ? props.buttonLink : null}>
          <div
            className={`m-auto h-fit rounded-md ${props.buttonColor} justify-center p-4 w-fit px-6 text-black shadow-sm`}
          >
            <p className="overflow-hidden flex justify-center text-xs font-semibold text-center">
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
