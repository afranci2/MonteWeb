import React from "react";
import IglesiasCard from "../../../../components/IglesiasCard/IglesiasCard";
import Link from "next/link";

const IglesiasMapListLeft = (props) => {
  return (
    <div className="relative md:z-30 md:absolute rounded-lg overflow-auto">
      <div className="md:bg-white shadow-lg p-4 m-auto text-md z-0 font-semibold h-14 w-full flex bg-red-800 justify-center items-center text-white">
        <p>Busca Local</p>
      </div>
      <div className="md:bg-white border-2 hidden shadow-lg m-auto p-10 font-semibold h-16 w-full md:flex justify-center items-center ">
        <p className="w-full flex justify-center text-black">Busca Local</p>
      </div>{" "}
      <div className="bg-white overflow-auto h-96 relative w-full md:h-screen ">
        <div className="aflex flex-col">
          {props.churches.map((church) => {
            return (
              <Link href={`/iglesias/${church.id}`} key={church.name}>
                <IglesiasCard church={church} images={props.images} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IglesiasMapListLeft;
