import React from "react";
import EventTab from "../../components/tab/eventsTab/EventsTab";
import "../../components/tab/sideTab/ChurchMainTab.css";

const Events = ({ res }) => {
  return (
    <div className="w-full ">
      <div className="try bg-black">
        {res ? (
          <div>
            {res.map((event) => {
              return <EventTab key={event.id} info={event} />;
            })}
          </div>
        ) : <div className="w-full h-screen"><p>Loading...</p></div>}
      </div>
    </div>
  );
};

export default Events;
