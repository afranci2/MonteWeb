"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ChurchZip = () => {
  function zipSubmit() {
    console.log("wefwef");
  }

  return (
      <div className="bg-gray-100 text-black hidden p-12 justify-between md:flex">
        <div>
          <p className=" font-semibold font-serif text-4xl  ">
            Un Mision Global
          </p>
          <p>Conectate con Nosotros y Encuentra su Nuevo Casa Espiritual</p>
        </div>
        <form className="h-8 text-sm my-auto flex gap-2">
          <input
            placeholder="02939"
            className="rounded-lg px-2 bg-gray-200"
            id="zip"
          ></input>
          <AiOutlineSearch
            color={"fffff"}
            onClick={zipSubmit}
            className="pl-2 m-auto cursor-pointer"
            size={30}
          />
        </form>
      </div>
  );
};

export default ChurchZip;
