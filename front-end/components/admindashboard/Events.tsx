"use client"
import React, {useState, useEffect} from 'react'

async function fetchCredentials(e) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/get-all-events`,
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }


  
const Events = () => {
  return (
    <div>Events</div>
  )
}

export default Events