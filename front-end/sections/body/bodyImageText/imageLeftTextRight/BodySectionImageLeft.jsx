import React from "react";
import BodyImageText from "../BodyImageText";

const BodySectionImageLeft = (props) => {
  return (
    <>
      <BodyImageText
      buttonColor={props.buttonColor}
        backgroundColor={props.backgroundColor}
        card={props.card}
        image={props.image}
        headingText={props.headingText}
        subheadingText={props.subheadingText}
        subheadingText2={props.subheadingText2}
        buttonText={props.buttonText}
        buttonLink={props.buttonLink}
        imagePosition="right"
        children={props.children}
        blog={props.blog}
      ></BodyImageText>
    </>
  );
};

export default BodySectionImageLeft;
