import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SocialMediaTab = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank">
        <div className="icon flex  text-black text-center text-sm font-regular gap-2 rounded-lg">
          <div className="flex  justify-center m-auto align-middle'">
            {props.children}

            {props.icon}
          </div>
          <p className="flex font-medium justify-center m-auto align-middle">
            {props.text}
          </p>
          <IoIosArrowForward className="flex  m-auto " size={20} fill="black" />
        </div>
      </a>
    </div>
  );
};

export default SocialMediaTab;
