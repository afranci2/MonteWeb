import React from "react";
import Tab from "../Tab";
import TertiaryButton from "../../tertiaryButton/TertiaryButton";
import SecondaryButton from "../../secondaryButton/SecondaryButton";


const SideTab = (props) => {
  return (
    <Tab>
      <div className="container h-fit rounded-xl flex bg-white flex-col gap-4 p-8">
        <div className="content w-full">
          <p className="text-black text-xl font-semibold">{props.headerText} </p>
          <p className="text-black/60 text-sm ">{props.subheaderText}</p>
          <div className={!props.buttonText ? "hidden w-full bg-white" : "button bg-white mt-8 w-full"}>
            <TertiaryButton position="center" text={props.buttonText} buttonLink={props.buttonLink} buttonColor={props.buttonColor}/>
          </div>
          {props.children}
        </div>
      </div>
    </Tab>
  );
};

export default SideTab;
