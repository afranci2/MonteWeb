
import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

async function fetchChurchesImages(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-church-images/${id}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const data = await res.json();
    return data; // parses
  } catch (error) {
    console.log(error);
  }
}

async function IglesiasCard({ church }) {
  const res2 = await fetchChurchesImages(church.id);
  const mainImage = res2?.find(
    (image) => image.is_main === 1
  );

  return (
    <div>
      <div className="hover:bg-gray-100/80  cursor-pointer p-8 py-4 w-full border-b-2 z-50 md:px-8 md:py-8 flex gap-6">
        <Image
          className="w-1/4 rounded-md object-cover bg-black md:w-1/3"
          width={80}
          height={100}
          src={await mainImage?.source}
          alt="church-image"
        />
        <div className="w-3/6 text m-auto ">
          <p className="font-semibold">{church.location}</p>
          <p className="text-gray-500 font-regular text-sm">{church.address}</p>
        </div>
        <IoIosArrowForward
          className="w-1/6 flex justify-end r-0 m-auto "
          size={20}
        />
      </div>
    </div>
  );
}

export default IglesiasCard;
