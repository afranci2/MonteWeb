import React from "react";
import LideresTab from "../../components/tab/liderestab/LideresTab";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg";
const Becky = "https://monte-assets.s3.amazonaws.com/img/becky.jpg";
const Pastora = "https://monte-assets.s3.amazonaws.com/img/pastora.jpg";
const Anthony = "https://monte-assets.s3.amazonaws.com/img/anthony.jpg";
import { MainButton } from "../../components";
import Header from "../header/Header";

const Lideres = () => {
  const lidereslist = [
    {
      id:0,
      image: Pastor,
      heading: "Rev. Samuel Francisco",
      subheading: "Presidente",
    },
    {
      id:1,

      image: Pastora,
      heading: "Rev. Isabel Francisco",
      subheading: "Vice Presidente",
    },
    {
      id:2,

      image: Becky,
      heading: "Becky Ramos",
      subheading: "Secretaria",
    },
    {
      id:3,

      image: Anthony,
      heading: "Dr. Anthony Francisco",
      subheading: "Tesorero",
    },
  ];
  return (
    <div className="py-24 ">
      <div className="w-10/12 m-auto">
        <p className="font-serif text-4xl">Nuestros Lideres</p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="text-white py-8 my-8">
          <MainButton text="Ver Mas" />
        </div>
      </div>
      <div className="w-11/12 flex py-8 gap-6 m-auto">
        {lidereslist.map((lider) => {
          return (
            < div className="" key={lider.id}>
              <img
                className="rounded-lg object-cover h-full"
                src={lider.image}
              />
              <div className="py-4">
              <p className="font-bold"> {lider.heading}   </p>
              <p className="text-sm"> {lider.subheading} </p>
</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lideres;
