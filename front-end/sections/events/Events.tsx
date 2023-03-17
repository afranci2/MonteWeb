import React from "react";
import EventTab from "../../components/tab/eventsTab/EventsTab";
import "../../components/tab/sideTab/ChurchMainTab.css";

const Events = ({ res }) => {
  return (
    <div className="w-full ">
      <div className="try">
        {res ? (
          <div>
            {res.map((event) => {
              return <EventTab key={event.id} info={event} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Events;
