import React from "react";
import Image from 'next/image'
import Link from "next/link";
const something = "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Baptium/119045738_4418187221586712_7673039802355621537_n.jpg"
import '../sideTab/ChurchMainTab.css'

const EventsTab = ({ info }) => {
  return (
    <div className="">
      {" "}
      <Link href={info.name}>
        <div className="something overflow-hidden relative rounded-lg shadow-lg bg-white">
          <div className="z-40 absolute text-black bottom-0 p-8">
            <p className="text-2xl font-semibold">{info.name}</p>
            <p>{info.location}</p>
          </div>
          <div className="absolute gradient w-full h-full"></div>

        </div>
      </Link>
    </div>
  );
};

export default EventsTab;
