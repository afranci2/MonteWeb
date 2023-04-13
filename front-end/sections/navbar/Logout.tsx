"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function clickHandler() {
  sessionStorage.removeItem("jwtToken");
}

function Logout() {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setTimeout(() => {
      setHover(false);
    }, 1000);
  }

  function clickHandler() {
    sessionStorage.removeItem("jwt");
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => handleMouseEnter()}
      className="flex gap-2"
    >
      {" "}
      <p className="text-sm">Hello Admin</p>
      {hover == true && (
        <Link onClick={clickHandler} href={"/admin/"}>
          <p className="text-sm font-bold ">Sign Out</p>{" "}
        </Link>
      )}
    </div>
  );
}

export default Logout;
