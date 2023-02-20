import React from "react";
import LideresTab from "../../components/tab/liderestab/LideresTab";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg";
import { MainButton } from "../../components";
import Header from "../header/Header";

const Lideres = () => {
  return (
    <div>
      <div className="w-10/12 p-12 m-auto">
        <p className="font-serif text-4xl">Nuestros Lideres</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="md:flex gap-4 w-11/12 m-auto">
        <LideresTab
          image={Pastor}
          heading="Rev. Samuel Francisco"
          subheading="Presidente"
        />
        <LideresTab
          image={Pastor}
          heading="Rev. Samuel Francisco"
          subheading="Presidente"
        />
        <LideresTab
          image={Pastor}
          heading="Rev. Samuel Francisco"
          subheading="Presidente"
        />
        <LideresTab
          image={Pastor}
          heading="Rev. Samuel Francisco"
          subheading="Presidente"
        />
      </div>
      <div className="text-white flex justify-center p-12">
        <MainButton text="Ver Mas" />
      </div>
    </div>
  );
};

export default Lideres;
