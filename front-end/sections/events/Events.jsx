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
          <div className="w-11/12 py-8 m-auto">
            <div className="m-auto flex justify-center">
              <div className="try2  py-8 ">
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
