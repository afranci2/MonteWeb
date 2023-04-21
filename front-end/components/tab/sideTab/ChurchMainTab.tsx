import React from "react";
import Image from "next/image";
import "./ChurchMainTab.css";
import Link from "next/link";

const ChurchMainTab = ({ socials, images, mainImage }) => {
console.log("here is images", images[1])
  return (
    <div className="md:p-4 else flex flex-col md:grid gap-4 grid-cols-2 ">
      <Link href={"/iglesias"}>
        <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full ">
          <div className="z-40 absolute text-white bottom-0 p-8">
            <p className="text-2xl font-semibold">Eres Nuevo?</p>
            <p className="text-sm ">Descubre más acerca de nuestra iglesia.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={images[1].source}
            alt="image"
            width={1000}
            height={1000}
          />
        </div>
      </Link>
      <Link href={"/iglesias"}>
        <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full">
          <div className="z-40 absolute text-white bottom-0 p-8">
            <p className="text-2xl font-semibold">Conéctate</p>
            <p className="text-sm ">Encuentra información sobre cómo formar parte de nuestra comunidad.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={images[2].source}
            alt="image"
            width={1000}
            height={1000}
          />
        </div>
      </Link>

      <Link href={'/servir'}>
        <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full">
          <div className="z-40 absolute text-white bottom-0 p-8">
            <p className="text-2xl font-semibold">Servir</p>
            <p className="text-sm ">Aprende cómo puedes involucrarte y servir.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={images[3].source}
            alt="image"
            width={1000}
            height={1000}
          />
        </div>
      </Link>
      <Link href={'/donar'}>
        <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full">
          <div className="z-40 absolute text-white bottom-0 p-8">
            <p className="text-2xl font-semibold">Donar</p>
            <p className="text-sm ">Ver cómo puedes dar una donación.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={images[4].source}
            alt="image"
            width={1000}
            height={1000}
          />
        </div>
      </Link>
    </div>
  );
};

export default ChurchMainTab;
