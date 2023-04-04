import React from "react";
import EventTab from "../../components/tab/eventsTab/EventsTab";
import "../../components/tab/sideTab/ChurchMainTab.css";

const Events = ({ res, res2 }) => {
  return (
    <div className=" m-auto w-11/12 ">
      <div>
        {res ? (
          <div className="w-full py-8 ">
            <div className="md:hidden">
              <div className="">
                {res.map((event) => {
                  const filteredInfo2 = res2.filter(
                    (info) => info.event_id === event.id
                  );
                  return (
                    <EventTab
                      key={event.id}
                      info={event}
                      info2={filteredInfo2}
                    />
                  );
                })}
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="try2 py-8">
                {res.map((event) => {
                  const filteredInfo2 = res2.filter(
                    (info) => info.event_id === event.id
                  );
                  return (
                    <EventTab
                      key={event.id}
                      info={event}
                      info2={filteredInfo2}
                    />
                  );
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
