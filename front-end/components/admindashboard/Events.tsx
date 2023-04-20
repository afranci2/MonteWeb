"use client";
import React, { useState, useEffect } from "react";

const Events = () => {
  const [data, setData] = useState();

  async function fetchEvents() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/get-all-events`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const data = await res.json();
      setData(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  console.log(data);

  function clickHandler() {
    console.log("hey");
  }

  return (
    <div>
      <p>Events</p>

      <table className="table-auto border-2">
        <tr className="text-left">
          <th>Edit</th>
          <th>Name</th>
          <th>Location</th>
          <th>Description</th>
          <th>Image</th>
          <th>Link</th>
        </tr>
        {data != undefined
          ? data.map((event) => {
              return (
                <tr className="" key={event.id}>
                  <td
                    onClick={clickHandler}
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    Yes/No
                  </td>
                  <td>{event.name}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>
                  <td>{event.image}</td>
                  <td>{event.link}</td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
};

export default Events;
