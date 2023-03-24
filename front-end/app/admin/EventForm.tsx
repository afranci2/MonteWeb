"use client";
import React, { useState } from "react";

const EventForm = () => {
  const [name, setName] = useState();
  return (
    <div>
      <form>
        <label htmlFor="name"></label>
        <input id="name"></input>
        <label htmlFor="address"></label>
        <input id="address"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
