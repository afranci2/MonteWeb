
import React from "react";
import EventTab from "../../components/tab/eventsTab/EventsTab";
import "../../components/tab/sideTab/ChurchMainTab.css";

const Events = ({ res }) => {


  return (
    <div  className=" m-auto w-11/12 ">
      <div>
        {res ? (
          <div className="w-full py-8 ">
            <div className="md:hidden">
              <div className="">
                {res.map((event) => {
                  return <EventTab key={event.id} info={event} />;
                })}
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="try2 py-8">
                {res.map((event) => {
                  return <EventTab key={event.id} info={event} />;
                })}
              </div>
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
