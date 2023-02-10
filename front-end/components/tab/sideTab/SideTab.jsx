import React from "react";
import Tab from "../Tab";
import TertiaryButton from "../../tertiaryButton/TertiaryButton";

const SideTab = (props) => {
  return (
    <Tab>
      <div className="container h-fit rounded-xl flex bg-white flex-col gap-4 p-8">
        <div className="content w-full">
          <p className="text-black text-lg font-medium">{props.headerText} </p>
          <p className="text-black text-xs ">{props.subheaderText}</p>
          <div className={!props.buttonText ? "hidden" : "button mt-8"}>
            <TertiaryButton position="center" text={props.buttonText} buttonLink={props.buttonLink} buttonColor={props.buttonColor}/>
          </div>
          {props.children}
        </div>
      </div>
    </Tab>
  );
};

export default SideTab;
