import React from "react";
import {SecondaryButton } from "../../components/index";

const Tab = (props) => {
  return (
    <div className={`${props.mobile===true ? "w-11/12 m-auto" : "w-full" } my-8 w-full relative drop-shadow-md`}>
      <div
        className={`whole ${props.height} rounded-xl bg-${props.backgroundColor} flex overflow-hidden`}
      >
        {props.children}
        <img
          className={`h-full object-cover object-top ${props.imagePosition}`}
          src={props.image}
        />
        <img
          className={`h-full object-cover object-top ${props.imagePosition2}`}
          src={props.image}
        />

        <div
          className={
            props.children
              ? "hidden"
              : `flex p-8 text-center rounded-xl ${props.contentPosition} absolute z-50 content ${props.contentHeight} items-center bg-red-800/95 ${props.contentWidth}`
          }
        >
          <div className="flex flex-col m-auto w-full">
            <div className="text flex flex-col gap-4">
              <p className="font-semibold text-2xl">{props.headerText}</p>
              <p className="text-sm">{props.subheadingText}</p>
            </div>
            <div className="button mt-8 w-full">
              <SecondaryButton text={props.buttonText} link={props.link} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
