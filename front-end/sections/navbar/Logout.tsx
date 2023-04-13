"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function clickHandler() {
  sessionStorage.removeItem("jwtToken");
}

function Logout() {
  const [hover, setHover] = useState(false);
  function hoverHandler() {
    setHover(!hover);
    console.log("Rg");
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex gap-2" 
    >
      {" "}
      <p className="text-sm">Hello Admin</p>
      {hover == true && (
        <Link href={"/admin/"}>
          <p className="text-sm font-bold ">Sign Out</p>{" "}
        </Link>
      )}
    </div>
  );
}

export default Logout;
