import React from "react";
import BodyImageText from "../BodyImageText";

const BodySectionImageLeft = (props) => {
  return (
    <>
      <BodyImageText
        backgroundColor={props.backgroundColor}
        card={props.card}
        image={props.image}
        headingText={props.headingText}
        subheadingText={props.subheadingText}
        subheadingText2={props.subheadingText2}
        buttonText={props.buttonText}
        buttonLink={props.buttonLink}
        imagePosition="left"
        buttonColor={props.buttonColor}
        blog = {props.blog}
        blog2={props.blog2}
        blog3={props.blog3}
      ></BodyImageText>
    </>
  );
};

export default BodySectionImageLeft;
