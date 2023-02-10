import React from "react";
import { Link } from "react-router-dom";
import { Tab, Card, SecondaryButton } from "../../../components/index";

const TextRightTab = (props) => {
  return (
    <Tab
      imagePosition="w-3/4 "
      imagePosition2="w-1/4"
      headerText={props.headerText}
      subheadingText={props.subheadingText}
      buttonLink={props.buttonLink}
      buttonText={props.buttonText}
      image={props.image}
      contentPosition="bottom-0 right-0"
      contentWidth="w-5/12"
      contentHeight="h-full"
      height="h-[28em]"
    />
  );
};

export default TextRightTab;
