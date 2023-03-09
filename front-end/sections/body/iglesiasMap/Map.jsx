import React from "react";
import IglesiasMapListLeft from "./iglesiasListLeft/IglesiasMapListLeft";
import IglesiasMapRight from "./iglesiasMapRight/IglesiasMapRight";

export default async function Map() {
  return (
    <div>
      <IglesiasMapListLeft />
      <IglesiasMapRight />
    </div>
  );
};

