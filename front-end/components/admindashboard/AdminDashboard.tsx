"use client";
import React, { useState } from "react";
import "./admin.css";
import LeftOptions from "./components/LeftOptions";

const AdminDashboard = () => {

  function clickHandler(string) {
    console.log(string);
  }
  return (

    <div className="h-screen w-screen dashboard">
      <LeftOptions clickHandler={clickHandler} />

      <div className="h-full w-full bg-blue-400">wf wf ewfm, ef</div>
    </div>
  );
};

export default AdminDashboard;
