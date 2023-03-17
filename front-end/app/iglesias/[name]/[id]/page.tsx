import React from "react";

async function fetchChurches(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/iglesias`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await res.json();
    return data[id - 1]; // parses
  } catch (error) {
    console.log(error);
  }
}
async function page(params) {
  const res = await fetchChurches(params.name);

  return <div>page</div>;
}

export default page;
