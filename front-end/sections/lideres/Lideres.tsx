import React from "react";
import LideresTab from "../../components/tab/liderestab/LideresTab";
const Pastor = "https://monte-assets.s3.amazonaws.com/img/pastor3.jpg";
const Becky = "https://monte-assets.s3.amazonaws.com/img/becky.jpg";
const Pastora = "https://monte-assets.s3.amazonaws.com/img/pastora.jpg";
const Anthony = "https://monte-assets.s3.amazonaws.com/img/anthony.jpg";
import { MainButton } from "../../components";
import Header from "../header/Header";
import Image from "next/image";

async function Lideres() {
  const lidereslist = [
    {
      id: 0,
      image: Pastor,
      heading: "Rev. Samuel Francisco",
      subheading: "Presidente",
    },
    {
      id: 1,

      image: Pastora,
      heading: "Rev. Isabel Francisco",
      subheading: "Vice Presidente",
    },
    {
      id: 2,

      image: Becky,
      heading: "Rebecca Ramos",
      subheading: "Secretaria",
    },
    {
      id: 3,

      image: Anthony,
      heading: "Dr. Anthony Francisco",
      subheading: "Tesorero",
    },
  ];


  return (
    <div className="py-20">
      <div className="w-10/12 mx-auto py-12 ">
        <p className="font-serif font-semibold text-4xl">Nuestros Lideres</p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col justify-center mx-auto w-10/12 md:flex md:flex-row gap-6 ">
        {lidereslist.map((lider) => {
          return (
            <div className="flex flex-col w-10/12 mx-auto" key={lider.id}>
              <div className="h-full flex flex-1 object-cover w-auto rounded-lg overflow-hidden">
                <img className="object-cover" src={lider.image} alt="ewf" />
              </div>
              <div className="py-4 text-center md:text-left">
                <p className="font-bold text-lg"> {lider.heading} </p>
                <p className="text-sm"> {lider.subheading} </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-white flex justify-center py-12 ">
          <MainButton text="Ver Mas" />
        </div>
    </div>
  );
};

export default Lideres;
