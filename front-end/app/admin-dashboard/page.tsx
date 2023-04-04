"use client";
import React from "react";

const page = ({ token }) => {
  async function fetchProtectedData(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/update-event-1`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer: ${token}`,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            name: "anthonytest"
          })
        }
      );

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(token);
  return (
    <div>
      <p>Hello There</p>{" "}
      {token ? <p>You are authorized</p> : <p>Not Authorized</p>}
      <button onClick={fetchProtectedData}>Fetch Protected Data</button>
    </div>
  );
};

export default page;
