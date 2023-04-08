"use client";

import React, { useEffect, useState } from "react";
import AdminDashboard from "../../components/admindashboard/AdminDashboard";
import NotAdmin from "../../components/admindashboard/NotAdmin";


// retrieve the token from the cookie
const fetchProtectedData = async (token) => {
  try {
    const res = await fetch(`http://localhost:8000/test`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: "anthonytest",
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const page = () => {
  const [getToken, setGetToken] = useState("");

  // retrieve the token from localStorage
  useEffect(() => {
    setGetToken(sessionStorage.getItem("jwt"));
  }, []);

  if (getToken) {
    const res =  fetchProtectedData(getToken);
    console.log(res)

  }

  return (
    <div>
      <p>Hello </p>{" "}
      {getToken ? (
        <div>
          <AdminDashboard />
        </div>
      ) : (
        <div>
          {" "}
          <NotAdmin />
        </div>
      )}
    </div>
  );
};

export default page;
