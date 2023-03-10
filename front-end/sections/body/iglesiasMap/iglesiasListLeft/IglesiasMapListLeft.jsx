import React from "react";
import IglesiasCard from "../../../../components/IglesiasCard/IglesiasCard";

const IglesiasMapListLeft = (props) => {
  return (
    <div className="z-30 absolute rounded-lg overflow-auto ">
      <div className="md:bg-white shadow-lg m-auto text-lg z-0 font-semibold h-16 w-full flex bg-red-800 justify-center items-center text-white">
        <p>Busca Local</p>
      </div>
      <div className="md:bg-white border-2 shadow-lg m-auto text-lg p-12 font-semibold h-16 w-full flex justify-center items-center ">
        <p className="w-full flex justify-center text-black ">Busca Local</p>
      </div>{" "}
      <div className="bg-white overflow-auto  h-96 relative w-full md:h-screen ">
        <div className="aflex flex-col">
          {props.churches.map((church) => {
            return <IglesiasCard key={church.id} church={church} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default IglesiasMapListLeft;
