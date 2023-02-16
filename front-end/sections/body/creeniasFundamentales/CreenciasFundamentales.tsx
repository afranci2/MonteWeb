import React from "react";
import Header from "../../header/Header";
import CreenciasImage from "../../../public/assets/img/bible.jpg";
import MainButton from '../../../components/mainButton/MainButton'

const CreenciasFundamentales = () => {
  return (
    <div>
      <Header
        children={undefined}
        image={CreenciasImage}
        headerText={"Creencias Fundamentales"}
        classChangeText={undefined}
        buttonColor={undefined}
        buttonLink={undefined}
        buttonText={undefined}
        contentPosition={undefined}
        video={undefined}
        subheadingText={undefined}
        container={undefined}
      />
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <MainButton />
      </ul>
    </div>
  );
};

export default CreenciasFundamentales;
