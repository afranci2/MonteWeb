"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  console.log({ session });

  return (
    <div>
      <p>Try this</p>
      <button
        className="p-2 px-8 bg-white rounded-lg flex justify-center"
        onClick={() => {
          signIn();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default page;
