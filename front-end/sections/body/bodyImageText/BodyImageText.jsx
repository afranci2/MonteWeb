import React from "react";
import { MainButton } from "../../../components";
import Image from "next/image";

const BodyImageText = (props) => {
  return (
    <div className=" border-t-gray-100 border-2 h-fit md:h-[42rem] relative text-black bg-gradient-to-t from-gray-300/50 to-gray-100/20 py-32 ">
      <div className=" h-full content flex flex-col  w-9/12 m-auto gap-4 md:flex-row">
        {props.imagePosition === "right" ? (
          <Image
            width={1000}
            height={1000}
            alt="header image"
            className="h-full md:w-1/2 object-cover md:p-4 md:pr-12 md:flex"
            src={props.image}
          />
        ) : (
          <div></div>
        )}

        <div className="md:w-1/2 text-center align-center mt-4 md:m-auto flex flex-col gap-4 md:text-left">
          <p className="text-3xl font-bold ">{props.headingText}</p>
          <p className="text-sm  ">{props.subheadingText}</p>
          <div className="py-2 pb-10 flex justify-center md:justify-start">
            {props.buttonLink && (
              <MainButton
                buttonColor="bg-yellow-400"
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
            className="h-full md:w-1/2 object-cover md:p-4  md:pl-12 md:flex"
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
