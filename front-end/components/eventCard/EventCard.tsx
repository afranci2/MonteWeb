"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const something =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Baptium/119045738_4418187221586712_7673039802355621537_n.jpg";

const EventCard = ({ event, dates }) => {
  console.log(event)
  const [click, setClick] = useState(false);

  function clickHandler() {
    console.log("het");
  }

  return (
    <div className="cursor-pointer">
      {click && (
        <div
          className=" left-[-10px] w-screen absolute z-50 flex justify-center items-center  bg-opacity-50"
          onClick={() => setClick(false)}
        >
          <div className="w-full h-full max-w-screen-lg mx-auto p-16 bg-white rounded-md shadow-lg">
            <div className="text-left">
              <p>qwfl wj fwwefk wkjf wkqjf kwqe fkwqe fkjw</p>
              <p>qwfl wj fw</p>
            </div>
            <RiCloseLine
              className="absolute top-0 right-0 cursor-pointer m-8"
              color={"#000000"}
              size={30}
              onClick={() => setClick(false)}
            />
          </div>
        </div>
      )}
      <a target={"_blank"} href={event.link}>
        <div onClick={clickHandler} className="p-4">
          <div className=" overflow-hidden relative rounded-md">
            <Image
              className="object-cover h-full w-full overflow-hidden"
              src={event.image}
              alt="image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="relative text-black py-4">
            {dates ? (
              <p>
                {dates[0].date} - {dates[dates.length - 1].date}
              </p>
            ) : null}

            <p className="text-xl font-semibold">{event.name}</p>
            <p>{event.location}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventCard;
