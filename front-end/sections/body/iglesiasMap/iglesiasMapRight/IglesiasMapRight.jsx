"use client"
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const IglesiasMapRight = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className="h-screen w-full">
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="h-screen w-full"
      ></GoogleMap>
    </div>
  );
}

export default IglesiasMapRight;
