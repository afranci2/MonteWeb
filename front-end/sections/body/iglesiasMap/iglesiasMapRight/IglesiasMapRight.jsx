import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const IglesiasMapRight = () => {
  const [churches, setChurches] = useState([]);

  async function fetchChurches() {
    try {
      const res = await fetch("http://localhost:8000/iglesias", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const data = await res.json();
      setChurches(data);
      console.log(data);
      return data; // parses
    } catch (error) {
      console.log(error);
    }
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAOZBGKxwzgj7Jao4tg-qtgM-MgMUOwhOU",
  });

  useMemo(() => {
    fetchChurches();
  }, []);

  const center = useMemo(() => ({
    lat: 41.86482006659902,
    lng: -71.41359964022818,
  }));

  if (loadError) return <div>wefew</div>;
  if (!isLoaded)
    return (
      <div className="h-screen w-full">
          <GoogleMap
            zoom={14}
            center={center}
            mapContainerClassName="h-screen w-full"
          >
            {churches.map((church) => (
              <Marker key={church.id} position={church.position} />
            ))}
          </GoogleMap>
      </div>
    );
};

export default IglesiasMapRight;
