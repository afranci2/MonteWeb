import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";


const IglesiasCard = ({ church }) => (
  <div>
    <div  className="hover:bg-gray-100/80  cursor-pointer p-8 py-4 w-full border-b-2 z-50 md:px-12 md:py-8 flex gap-8">
      <Image
        className="w-1/4 rounded-md object-cover bg-black"
        width={80}
        height={100}
        src={church.images.main}
        alt="church-image"
      />
      <div className="w-3/6 text m-auto ">
        <p className="font-semibold">{church.location}</p>
        <p className="text-gray-500 font-regular text-sm">{church.address}</p>
      </div>
      <IoIosArrowForward className="w-1/6 flex justify-end r-0 m-auto " size={20}/>

    </div>
  </div>
);

export default IglesiasCard;
