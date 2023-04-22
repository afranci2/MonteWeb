import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

async function Lideres({ pastors, show_link }) {
  return (
    <div className="py-20  bg-white w-10/12 justify-center flex flex-col text-center m-auto md:text-left ">
      <div className="py-12 w-3/4 m-auto md:m-0">
        <p className="font-serif font-semibold text-4xl">Nuestros Lideres</p>
        <p className="w-1/2 text-sm pt-4">
          Conozca a las personas que lideran el camino en Movimiento: un equipo
          apasionado y comprometido en ser la empresa que nuestros clientes
          desean que seamos.
        </p>
      </div>
      <div className="pb-8 flex flex-col  mx-auto md:flex md:flex-row gap-6  ">
        {pastors.map((lider) => {
          return (
            <div className="flex flex-col w-10/12 mx-auto" key={lider.id}>
              <div className="h-full flex flex-1 object-cover w-auto rounded-lg overflow-hidden">
                <img className="object-cover" src={lider.image} alt="ewf" />
              </div>
              <div className="py-4 text-center md:text-left">
                <p className="font-bold text-lg">
                  {lider.title} {lider.first_name} {lider.last_name}
                </p>
                <p className="text-sm"> {lider.position} </p>
              </div>
            </div>
          );
        })}
      </div>
      {show_link && (
        <div className="pt-8">
          <Link className="mt-8 " href="/conocernos/lideres">
            <div className="flex justify-center gap-4">
              <button className="text-black text-sm  font-bold  rounded-lg text-center ">
                Lideres{" "}
              </button>{" "}
              <IoIosArrowForward
                className=" flex items-center my-auto"
                size={12}
              />{" "}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Lideres;
