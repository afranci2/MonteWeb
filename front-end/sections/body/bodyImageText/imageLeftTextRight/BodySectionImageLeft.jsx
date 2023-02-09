import React from "react";
import  BodyImageText  from '../BodyImageText'

const BodySectionImageLeft = (props) => {
  return <>
  <BodyImageText image={props.image} headingText={props.headingText} subheadingText={props.subheadingText} buttonText={props.buttonText} buttonLink={props.buttonLink} imagePosition="right"></BodyImageText>
  </>;
};

export default BodySectionImageLeft;
