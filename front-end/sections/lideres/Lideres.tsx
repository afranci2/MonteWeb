import React from "react";
import LideresTab from "../../components/tab/liderestab/LideresTab";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg";
const Becky = 'https://monte-assets.s3.amazonaws.com/img/becky.jpgg'
import { MainButton } from "../../components";
import Header from "../header/Header";

const Lideres = () => {
  return (
    <div className="py-8">
      <div className="w-9/12 p-12 m-auto">
        <p className="font-serif text-4xl">Nuestros Lideres</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="md:flex pb-8 gap-6 w-10/12 m-auto">
        <LideresTab
          image={Pastor}
          heading="Rev. Samuel Francisco"
          subheading="Presidente"
        />
        <LideresTab className=""
          image={Pastor}
          heading="Isabel Francisco"
          subheading="Vice Presidente"
        />
        <LideresTab
          image={Becky}
          heading="Becky Ramos"
          subheading="Presidente"
        />
        <LideresTab
          image={Pastor}
          heading="Dr. Anthony Francisco"
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
