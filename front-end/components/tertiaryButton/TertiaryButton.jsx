import React from "react";
import Link from "next/link";

const TertiaryButton = (props) => {
  return (
    <div
      className={` ${props.position === "center" && "m-auto"} ${
        props.margin
      } flex justify-center max-h-fit w-full drop-shadow-md`}
    >
      {props.buttonLink ? (
        <Link href={props.buttonLink ? props.buttonLink : null}>
          <div
            className={`m-auto h-full rounded-md ${props.buttonColor} justify-center py-4 px-8 w-full text-black shadow-sm`}
          >
            <p className="overflow-hidden flex justify-center text-xs font-bold text-center">
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
