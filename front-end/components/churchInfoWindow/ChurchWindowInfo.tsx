"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MainButton from "../mainButton/MainButton";
import "./churchwindow.css";

function ChurchWindowInfo({ church }) {
  const [data, setData] = useState();

  async function fetchEvents(id) {
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
      setData(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents(church.id);
  }, []);

  return (
    <div className="w-[100px] trythis overflow-auto flex ">
      {data && (
        <div className="contain m-auto flex flex-col items-center ">
          <div className=" overflow-auto flex gap-4 p-4">
            <div className="overflow-hidden relative rounded-lg image w-full h-3/4 object-cover bg-black">
              <Image
                className="relative object-cover w-full h-full"
                src={data[0].source}
                alt="church icon"
                fill
              />
            </div>
            <div className="text w-1/2">
              <p className="font-bold text-md">{church.name}</p>
              <p className="text-xs">{church.description}</p>
            </div>
          </div>
          <div className="flex justify-center p-2">
            <MainButton
              text={"Ver Mas"}
              buttonColor={"bg-red-800 text-white"}
              link={`/iglesias/${church.id}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChurchWindowInfo;
