"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"


async function page() {
  const { data: session, status } = useSession();
  console.log(session)
  console.log(status)


  return (<div>
    Hello
  </div>)
}

export default page;
