import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

async function Lideres({ pastors }) {
  return (
    <div className="py-20 bg-white">
      <div className="w-10/12 mx-auto py-12 ">
        <p className="font-serif font-semibold text-4xl">Nuestros Lideres</p>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="pb-8 flex flex-col justify-center mx-auto md:flex md:flex-row gap-6  w-10/12">
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
