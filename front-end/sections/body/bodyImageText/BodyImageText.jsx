import React from "react";
import { MainButton } from "../../../components";
import Image from "next/image";

const BodyImageText = (props) => {
  return (
    <div
      className={`flex ${props.blog ? "md:h-fit" : "md:h-[42rem]"} relative text-black ${
        props.backgroundColor
          ? `${props.backgroundColor}`
          : "bg-gradient-to-t from-gray-300/50 to-gray-100/20"
      } ${props.card ? "py-24" : "py-24"}`}
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
            className={` ${
              props.blog2 == undefined && props.blog == undefined
                ? "hidden"
                : ""
            }overflow-hidden h-full md:w-1/2 object-cover md:p-4 md:pr-12 md:flex`}
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
            className={` ${
              props.blog2 == undefined && props.blog == undefined
                ? ""
                : "hidden"
            } h-full md:w-1/2 object-cover md:p-4  md:pl-12 md:hidden`}
            src={props.image}
          />
        ) : (
          <div></div>
        )}

        {props.blog2 == undefined ? (
          <div
            className={` ${props.card ? "md:pl-12 p-4" : ""} ${
              props.blog != undefined ? "md:w-full" : "md:w-1/2"
            } text-center  overflow-hidden items-center mt-16 md:m-auto md:text-left`}
          >
            <p className={` font-bold ${props.blog3 ? "text-xl" : "text-3xl"}`}>{props.headingText}</p>
            <p className="text-sm py-2 pt-4">{props.subheadingText}</p>
            {props.subheadingText2 && (
              <p className="text-sm pb-8">{props.subheadingText2}</p>
            )}
            {props.children}
            <div
              className={`pt-4 overflow-hidden text-white flex justify-center md:justify-start ${
                props.card && "pb-16 md:pb-0"
              }`}
            >
              {props.buttonLink && (
                <MainButton
                  buttonColor={
                    props.buttonColor
                      ? props.buttonColor
                      : "bg-orange-500 text-white"
                  }
                  text={props.buttonText}
                  margin="my-8"
                  link={props.buttonLink}
                ></MainButton>
              )}
            </div>
          </div>
        ) : (
          <div className=" overflow-hidden">
            {props.blog3 && props.blog3}

            <div className="grid md:grid-cols-2 gap-8 w-full text-sm">
              <div className="w-full h-full overflow-hidden ">{props.blog2}</div>
              <div className="w-full h-full">{props.blog}</div>
            </div>
          </div>
        )}
        {props.imagePosition === "left" ? (
          <Image
            width={1000}
            height={1000}
            alt="header image"
            className={`overflow-hidden hidden h-full md:w-1/2 object-cover md:p-4  md:pl-12 ${
              props.blog != undefined ? "md:hidden" : "md:flex"
            }`}
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
