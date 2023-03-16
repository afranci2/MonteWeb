import React from "react";
import Image from 'next/image'

const ChurchMainTab = ({ res }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:grid-rows-2">
      <div className="bg-white rounded-lg shadow-lg h-16  w-11/12 m-auto">
        <Image className="object-cover h-auto w-full" src={res.images.supporting[0]} alt="image" width={1000} height={1000}/>
      </div>
      <div className="bg-white rounded-lg shadow-lg h-16  w-11/12 m-auto"></div>
      <div className="bg-white rounded-lg shadow-lg h-16  w-11/12 m-auto"></div>
      <div className="bg-white rounded-lg shadow-lg h-16  w-11/12 m-auto"></div>

    </div>
  );
};

export default ChurchMainTab;
