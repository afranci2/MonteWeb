"use client";
import React, { useState } from "react";
import { setCookie } from "nookies";

import { redirect } from "next/navigation";

const page = ({ searchParams }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();

  async function fetchCredentials(e) {
    console.log("clicked");
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/password`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await res.json();
      console.log(data);
      setResponse(data);
      sessionStorage.setItem("jwt", data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function redirectPage(token) {
    redirect("/dashboard");
  }
  return (
    <div className=" h-screen w-screen  flex justify-center items-center">
      <div className=" w-3/4 admin h-fit bg-gray-200 p-12   ">
        <p className="font-bold pb-4 flex justify-center content-center">
          {" "}
          Admin{" "}
        </p>
        {response?.error ? (
            <div>
              <p className="py-2 text-red-400">Incorrect Credentials</p>
            </div>
          ) : null}
        <form>
          <div className="input-area flex gap-2 flex-col">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              className="rounded-lg p-2"
            ></input>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="rounded-lg p-2"
            ></input>
          </div>
          <div className="py-8">
            <button
              className="p-2 px-8 bg-white rounded-lg flex justify-center"
              onClick={fetchCredentials}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {response?.role && response?.role === "admin"
        ? redirectPage(response.token)
        : null}
    </div>
  );
};
export default page;
