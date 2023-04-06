import React from "react";
import  BodyImageText  from '../BodyImageText'

const BodySectionImageLeft = (props) => {
  return <>
  <BodyImageText image={props.image} headingText={props.headingText} subheadingText={props.subheadingText} subheadingText2={props.subheadingText2} buttonText={props.buttonText} buttonLink={props.buttonLink} imagePosition="left"></BodyImageText>
  </>;
};

export default BodySectionImageLeft;
