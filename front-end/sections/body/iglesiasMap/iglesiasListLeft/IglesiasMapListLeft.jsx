import React from "react";
import IglesiasCard from "../../../../components/IglesiasCard/IglesiasCard";
import Link from "next/link";

function IglesiasMapListLeft(props) {
  return (
    <div className="relative md:z-30 md:absolute  overflow-auto ">
      <div className={props.conocernos ? "hidden" : ""}>
        <div className="md:bg-white shadow-lg p-8 m-auto text-md z-0 font-semibold h-16 w-full flex border-b-2 justify-center items-center text-black">
          <p>Busca Local</p>
        </div>
      </div>
      <div className="md:bg-white z-50 border-b-2 hidden shadow-lg m-auto p-10 font-semibold h-16 w-full md:flex justify-center items-center ">
        <p className="w-full flex justify-center text-black">Busca Local</p>
      </div>{" "}
      <div className="bg-white overflow-auto z-20 h-96 relative w-full md:h-screen ">
        <div className="aflex flex-col">
          {props.churches.map((church) => {
            return (
              <Link href={`/iglesias/${church.id}`} key={church.id}>
                <IglesiasCard church={church} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IglesiasMapListLeft;
