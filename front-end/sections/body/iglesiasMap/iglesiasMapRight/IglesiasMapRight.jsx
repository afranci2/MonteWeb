"use client";
import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function IglesiasMapRight(props) {
  const [churches, setChurches] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOZBGKxwzgj7Jao4tg-qtgM-MgMUOwhOU",
  });

  const center = useMemo(() => ({
    lat: 41.86482006659902,
    lng: -71.41359964022818,
  }));

  if (!isLoaded) {
    return (
      <div className="w-full h-screen text-black flex font-bold justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="h-screen ">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName="h-screen w-full"
        >
          {props.churches &&
            props.churches.map((church) => {
              return <Marker 
              key={church.id}
              position={church.coordinates} />;
            })}
        </GoogleMap>
      </div>
    );
  }
}

export default IglesiasMapRight;
