import React from "react";
import IglesiasCard from "../../../../components/IglesiasCard/IglesiasCard";
import Link from "next/link";

function IglesiasMapListLeft(props) {
  function getDateAndTimeForChurchId(events, id) {
    const matchingEvent = events.filter((event) => event.event_id === id);
    const dateAndTime = `${matchingEvent[0].date} - ${
      matchingEvent[matchingEvent.length - 1].date
    }`;
    return dateAndTime;
  }

  return (
    <div className="relative md:z-30 md:absolute rounded-lg overflow-auto">
      <div className={props.conocernos ? "hidden" :""}>
        <div className="md:bg-white shadow-lg p-4 m-auto text-md z-0 font-semibold h-16 w-full flex bg-slate-100 justify-center items-center text-black">
          <p>Busca Local</p>
        </div>
      </div>
      <div className="md:bg-white border-2 hidden shadow-lg m-auto p-10 font-semibold h-16 w-full md:flex justify-center items-center ">
        <p className="w-full flex justify-center text-black">Busca Local</p>
      </div>{" "}
      <div className="bg-white overflow-auto h-96 relative w-full md:h-screen ">
        <div className="aflex flex-col">
          {props.churches.map((church) => {
            return (
              <Link href={`/iglesias/${church.id}`} key={church.id}>
                <IglesiasCard church={church} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IglesiasMapListLeft;
