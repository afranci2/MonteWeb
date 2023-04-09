import React from "react";
import EventCard from "../../eventCard/EventCard";
import "../sideTab/ChurchMainTab.css";

async function fetchEvents(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-event-dates-and-times/${id}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const data = await res.json();

    return data; // parses
  } catch (error) {
    console.log(error);
  }
}

const EventsTab = async ({ info }) => {
  const res = await fetchEvents(info.id);
  return (
    <div className="relative bg-white">
      {res ? <EventCard event={info} dates={res}  /> : <div>Loading</div>}
    </div>
  );
};

export default EventsTab;
