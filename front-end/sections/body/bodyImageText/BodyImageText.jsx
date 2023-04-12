import React from "react";
import { MainButton } from "../../../components";
import Image from "next/image";

const BodyImageText = (props) => {
  return (
    <div
      className={`h-fit md:h-[42rem] relative text-black ${
        props.backgroundColor
          ? `${props.backgroundColor}`
          : "bg-gradient-to-t from-gray-300/50 to-gray-100/20"
      } ${props.card ? "py-24" : "py-32 "}`}
    >
      <div
        className={`${
          props.card && "bg-white md:p-10 overflow-hidden rounded-lg shadow-lg"
        } h-full content md:flex flex-col w-10/12 m-auto gap-4 md:flex-row`}
      >
        {props.imagePosition === "right" ? (
          <Image
            width={1000}
            height={1000}
            alt="header image"
            className="overflow-hidden h-full md:w-1/2 object-cover md:p-4 md:pr-12 md:flex"
            src={props.image}
          />
        ) : (
          <div></div>
        )}
        {props.imagePosition === "left" ? (
          <Image
            width={1000}
            height={1000}
            alt="header image"
            className="h-full md:w-1/2 object-cover md:p-4  md:pl-12 md:hidden"
            src={props.image}
          />
        ) : (
          <div></div>
        )}
        <div
          className={` ${
            props.card ? "md:pl-12 p-4" : ""
          } md:w-1/2 overflow-hidden text-center align-center mt-4 md:m-auto flex flex-col  md:text-left`}
        >
          <p className="text-3xl font-bold ">{props.headingText}</p>
          <p className="text-sm py-2 pt-4">{props.subheadingText}</p>
          {props.subheadingText2 && (
            <p className="text-sm pb-8">{props.subheadingText2}</p>
          )}

          <div className="py-2 overflow-hidden text-white pb-10 flex justify-center md:justify-start">
            {props.buttonLink && (
              <MainButton
                buttonColor={props.buttonColor ? props.buttonColor : "bg-orange-500 text-white"}
                text={props.buttonText}
                margin="my-8"
                link={props.buttonLink}
              ></MainButton>
            )}
          </div>
        </div>
        {props.imagePosition === "left" ? (
          <Image
            width={1000}
            height={1000}
            alt="header image"
            className="overflow-hidden hidden h-full md:w-1/2 object-cover md:p-4  md:pl-12 md:flex"
            src={props.image}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default BodyImageText;
