import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SocialMediaTab = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank">
        <div className="icon mr-1 pt-5 flex text-black text-center text-sm border-t-2 font-regular ">
          <div className="flex  justify-left m-auto align-middle'">
            {props.children}

            {props.icon}
          </div>
          <p className="flex font-medium justify-left m-auto align-middle">
            {props.text}
          </p>
          <div className=" flex m-auto">
            <IoIosArrowForward className="" size={15} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialMediaTab;
