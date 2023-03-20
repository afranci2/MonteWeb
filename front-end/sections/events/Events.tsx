import React from "react";
import EventTab from "../../components/tab/eventsTab/EventsTab";
import "../../components/tab/sideTab/ChurchMainTab.module.css";

const Events = ({ res }) => {
  return (
    <div className=" m-auto w-11/12 ">
      <div>
        {res ? (
          <div className="w-full ">
            <div className=" md:hidden ">
              {res.map((event) => {
                return <EventTab key={event.id} info={event} />;
              })}
            </div>
            <div className="w-full hidden md:flex gap-4 try2">
              {res.map((event) => {
                return <EventTab key={event.id} info={event} />;
              })}
            </div>
          </div>
        ) : (
          <div className="w-full h-screen">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
