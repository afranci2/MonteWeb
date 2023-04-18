import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

async function Lideres({ pastors }) {
  return (
    <div className="py-20 m-auto bg-white w-10/12 justify-center flex flex-col">
      <div className="py-12 w-3/4">
        <p className="font-serif font-semibold text-4xl">Nuestros Lideres</p>
        <p className="w-1/2">
          Conozca a las personas que lideran el camino en Movimiento: un equipo
          apasionado y comprometido en ser la empresa que nuestros clientes
          desean que seamos. Juntos, trabajamos para lograr nuestra visión y
          cumplir con nuestra misión.
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
      <div className="pt-8">
        <Link className="mt-8 " href="/conocernos/creencias">
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
    </div>
  );
}

export default Lideres;
