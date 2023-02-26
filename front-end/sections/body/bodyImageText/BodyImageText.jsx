import React from "react";
import { MainButton, TertiaryButton } from "../../../components";
import Image from "next/image";

const BodyImageText = (props) => {
  return (
    <div className="h-fit md:h-[38rem] relative text-black bg-gradient-to-t from-black/10 to-black/0 py-8 ">
      <div className=" h-full content flex flex-col  w-9/12 m-auto gap-4 md:flex-row">
        {props.imagePosition === "right" ? (
          <div>
            <Image
              width={1000}
              height={1000}
              alt="header image"
              className="h-full md:w-1/2 object-cover md:p-4 md:flex"
              src={props.image}
            />
            <div className="align-center mt-4 md:m-auto flex flex-col gap-4">
              <p className="text-3xl ">{props.headingText}</p>
              <p className="text-sm">{props.subheadingText}</p>
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
        ) : (
          <div></div>
        )}

        {props.imagePosition === "left" ? (
          <div>
            <div className="align-center mt-4 md:m-auto flex flex-col gap-4">
              <p className="text-3xl ">{props.headingText}</p>
              <p className="text-sm">{props.subheadingText}</p>
              {props.buttonLink && (
                <MainButton
                  buttonColor="bg-yellow-400"
                  text={props.buttonText}
                  margin="my-8"
                  link={props.buttonLink}
                ></MainButton>
              )}
            </div>

            <Image
              width={1000}
              height={1000}
              alt="header image"
              className="h-full md:w-1/2 object-cover md:p-4 md:flex"
              src={props.image}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default BodyImageText;
