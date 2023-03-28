import React from "react";
import Image from "next/image";
import "./ChurchMainTab.css";
import Link from "next/link";

const ChurchMainTab = ({ socials, images }) => {
  console.log("this one", socials)
  console.log("this one too", images)


  return (
    <div className="md:p-4 else flex flex-col md:grid gap-4 grid-cols-2 ">
      <Link href={"/iglesias"}>
        <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full ">
          <div className="z-40 absolute text-white bottom-0 p-8">
            <p className="text-2xl font-semibold">Eres Nuevo?</p>
            <p>Meet the pastors and learn more about this location.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={images}
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
            <p>Meet the pastors and learn more about this location.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={null}
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
            <p>Meet the pastors and learn more about this location.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={null}
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
            <p>Meet the pastors and learn more about this location.</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={null}
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
