"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ChurchZip = () => {
  function zipSubmit() {
    console.log("wefwef");
  }

  return (
    <div className="w-full py-16 p-16 m-auto bg-gray-100">
      <div className="w-10/12 m-auto text-black justify-between flex">
        <div>
          <p className=" font-semibold font-serif text-4xl  ">
            Un Mision Global
          </p>
          <p className="text-sm">Conectate con Nosotros y Encuentra su Nuevo Casa Espiritual</p>
        </div>
        <form className="h-8 w-fit text-sm my-auto flex gap-2">
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
      </div>
  );
};

export default ChurchZip;
