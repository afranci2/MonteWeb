import React from "react";
import { Link } from "react-router-dom";
import { Tab, Card, SecondaryButton } from "../../../components/index";

const TextRightTab = (props) => {
  return (
    <Tab
      imagePosition="w-1/6 scale-x-[-1]"
      imagePosition2="w-5/6 scale-x-[-1]"
      headerText={props.headerText}
      subheadingText={props.subheadingText}
      buttonLink={props.buttonLink}
      buttonText={props.buttonText}
      image={props.image}
      contentPosition="bottom-0 left-0"
      contentWidth="w-5/12 min-w-1/2"
      contentHeight="h-full"
      height="h-[28em]"
    />
  );
};

export default TextRightTab;
