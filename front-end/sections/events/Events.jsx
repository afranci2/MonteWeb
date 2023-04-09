import React from "react";
import EventTab from "../../components/tab/eventsTab/EventsTab";
import "../../components/tab/sideTab/ChurchMainTab.css";

const Events = ({ res }) => {
  function clickHandler() {
    setClick(!click);

    console.log("het");
  }

  return (
    <div className="">
      <div>
        {res ? (
          <div className="w-full py-8 ">
            <div className="md:hidden">
              <div className="">
                {res.map((event) => {
                  return <EventTab key={event.id} info={event} clickHandler={clickHandler}/>;
                })}
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="w-11/12 try2 py-8 m-auto justify-center flex">
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
