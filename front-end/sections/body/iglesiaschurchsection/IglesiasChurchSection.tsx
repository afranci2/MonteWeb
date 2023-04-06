import React from "react";
import IglesiasMapList from "../../../sections/body/iglesiasMap/iglesiasListLeft/IglesiasMapListLeft";
import IglesiasMapRight from "../../../sections/body/iglesiasMap/iglesiasMapRight/IglesiasMapRight";

const IglesiasChurchSection = ({ churches, conocernos }) => {
  return (
    <div>
      {" "}
      <div>
        <div className="hidden md:flex md:min-w-[380px] md:w-1/4 overflow-hidden">
          {churches ? (
            <IglesiasMapList churches={churches} conocernos={conocernos} />
          ) : (
            <div>Loading</div>
          )}
        </div>
        <IglesiasMapRight churches={churches} />
        <div className="md:hidden ">
          {churches ? (
            <IglesiasMapList churches={churches} />
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IglesiasChurchSection;
