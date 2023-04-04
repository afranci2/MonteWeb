"use client";

import React, { useEffect, useState } from "react";
import { parseCookies } from "nookies";

// retrieve the token from the cookie
const fetchProtectedData = async (token) => {
  console.log("here is token", token);
  try {
    const res = await fetch(`http://localhost:8000/update-church/1`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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
    fetchProtectedData(getToken)
  }

  return (
    <div>
      <p>Hello There</p>{" "}
      {getToken ? <p>You are authorized</p> : <p>Not Authorized</p>}
      <button>Fetch Protected Data</button>
    </div>
  );
};

export default page;
