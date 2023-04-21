"use client";
import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import ChurchInfoWindow from '../../../../components/churchInfoWindow/ChurchWindowInfo'

function IglesiasMapRight(props) {



  function clickHandler() {
    console.log("ewfr");
    setChurches(true);
  }

  const [churchesTrack, setChurches] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
  });

  let center = useMemo(() => ({
    lat: 41.75482006659902,
    lng: -71.41359964022818,
  }));

  if (!isLoaded) {
    return (
      <div className="w-full h-screen text-black flex font-bold justify-center items-center md:pl-12">
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="z-0">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="z-0 h-[355px] md:h-screen w-full  "
        >
          {props.churches &&
            props.churches.map((church) => {
              console.log(church)

              return (
                <Marker
                  onClick={() => {
                    if (selectedMarker === church.id) {
                      // if the same marker is clicked again, close the InfoWindow
                      setSelectedMarker(null);
                    } else {
                      setSelectedMarker(church.id);
                      center={
                        lat: 49.75482006659902,
                        lng: -78.41359964022818,
                      }
                    }
                  }}
                  key={church.id}
                  position={{
                    lat:parseFloat(church.coordinates.split(",")[0]),
                    lng:parseFloat(church.coordinates.split(",")[1])
                  }}
                  
                >
                  {selectedMarker === church.id && (
                    <InfoWindow>
                        <ChurchInfoWindow images={props.images} church={church}/>
                    </InfoWindow>
                  )}
                </Marker>
              );
            })}
        </GoogleMap>
      </div>
    );
  }
}

export default IglesiasMapRight;
