import React from "react";
import Image from "next/image";
import "./ChurchMainTab.css";

const ChurchMainTab = ({ res }) => {
  return (
    <div className="md:p-4 else flex flex-col md:grid gap-4 grid-cols-2 ">
      <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full ">
        <div className="z-40 absolute text-white bottom-0 p-8">
          <p className="text-2xl font-semibold">Eres Nuevo?</p>
          <p>Meet the pastors and learn more about this location.</p>
        </div>
        <div className="absolute gradient w-full h-full"></div>
        <Image
          className="object-cover h-full w-full overflow-hidden"
          src={res.images.main}
          alt="image"
          width={1000}
          height={1000}
        />
      </div>
      <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full">
        <div className="z-40 absolute text-white bottom-0 p-8">
          <p className="text-2xl font-semibold">Eres Nuevo?</p>
          <p>Meet the pastors and learn more about this location.</p>
        </div>
        <div className="absolute gradient w-full h-full"></div>
        <Image
          className="object-cover h-full w-full overflow-hidden"
          src={res.images.main}
          alt="image"
          width={1000}
          height={1000}
        />
      </div>
      <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full">
        <div className="z-40 absolute text-white bottom-0 p-8">
          <p className="text-2xl font-semibold">Eres Nuevo?</p>
          <p>Meet the pastors and learn more about this location.</p>
        </div>
        <div className="absolute gradient w-full h-full"></div>
        <Image
          className="object-cover h-full w-full overflow-hidden"
          src={res.images.main}
          alt="image"
          width={1000}
          height={1000}
        />
      </div>
      <div className=" something overflow-hidden relative rounded-lg shadow-lg w-full">
        <div className="z-40 absolute text-white bottom-0 p-8">
          <p className="text-2xl font-semibold">Eres Nuevo?</p>
          <p>Meet the pastors and learn more about this location.</p>
        </div>
        <div className="absolute gradient w-full h-full"></div>
        <Image
          className="object-cover h-full w-full overflow-hidden"
          src={res.images.main}
          alt="image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default ChurchMainTab;
