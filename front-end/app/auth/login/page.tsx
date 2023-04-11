"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"


const page = () => {
  async function fetchCredentials(e) {
    e.preventDefault();
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
      console.log(data);
      setResponse(data);

      try {
        const trysignin = await signIn("credentials", {
          redirect: false,
          username,
          password
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();
  console.log(response);

  return (
    <div className=" h-screen w-screen  flex justify-center items-center">
      <div className=" w-3/4 admin h-1/2 bg-gray-200 p-12   rounded-lg">
        <p className="font-bold pb-4 flex justify-center content-center">
          {" "}
          Admin{" "}
        </p>
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
    </div>
  );
};

export default page;
