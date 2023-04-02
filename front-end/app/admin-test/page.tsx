"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {

  const { data: session } = useSession()
  console.log({ session });

  if (session) {
    return (
      <>
        Signed in <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } else {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      
    </>
    
  )}
  

  

};

export default page;
