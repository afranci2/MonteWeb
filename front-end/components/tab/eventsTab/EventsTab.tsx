import React from "react";
import Image from "next/image";
import Link from "next/link";
const something =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Baptium/119045738_4418187221586712_7673039802355621537_n.jpg";
import "../sideTab/ChurchMainTab.css";

const EventsTab = ({ info }) => {
  return (
    <div className="">
      {" "}
      <Link href={info.name}>
        <div className="something overflow-hidden relative rounded-lg shadow-lg bg-white">
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={something}
            alt="image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="z-40 relative text-black bottom-0 py-4">
          {info ? (
            <p>
              {info.datesAndTimes[0].date} -{" "}
              {info.datesAndTimes[info.datesAndTimes.length-1].date}
            </p>
          ) : null}

          <p className="text-xl font-semibold">{info.name}</p>
          <p>{info.location}</p>
        </div>
      </Link>
    </div>
  );
};

export default EventsTab;
