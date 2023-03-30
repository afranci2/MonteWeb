"use client";
import React, { useState } from "react";
import EventForm from "./EventForm";

const page = () => {
  async function fetchCredentials(e) {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:8000/password`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      setResponse(data) ; // parses
    } catch (error) {
      console.log(error);
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState()
  console.log(response)
  return (
    <div className="bg-gray-200">
      <p>Admin Event Form</p>
      <form>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        ></input>
        <button onClick={fetchCredentials}>Submit</button>
      </form>{" "}
      <p>This is the answer</p>
      <p>{response ? "hey" : "nah"}</p>
    </div>
  );
};

export default page;
