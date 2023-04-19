"use client";
import React, { useState } from "react";
import "./admin.css";
import Events from './Events'
import Churches from './Churches'
import LeftOptions from "./components/LeftOptions";

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState();

  function clickHandler(string) {
    setSelectedOption(string);
  }

  return (
    <div className="h-screen w-screen dashboard">
      <LeftOptions clickHandler={clickHandler} />

      <div className="h-full w-full bg-blue-400">
        {selectedOption=="Events" && <Events/>}
        {selectedOption=="Churches" && <Churches/>}
        {selectedOption=="Other" && <Events/>}

      </div>
    </div>
  );
};

export default AdminDashboard;
