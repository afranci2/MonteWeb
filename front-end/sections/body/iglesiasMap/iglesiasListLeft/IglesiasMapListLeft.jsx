import React from "react";
import IglesiasCard from "../../../../components/IglesiasCard/IglesiasCard";

const IglesiasMapListLeft = (props) => {
  return (
    <div className="z-20  rounded-lg overflow-auto">
      <div className="md:bg-white shadow-lg m-auto h-16 w-full flex bg-red-800 justify-center items-center text-white">
        <p>Find a Location</p>
      </div>

      <div className="bg-white overflow-auto  h-96 relative w-full z-30 md:h-screen md:min-w-[310px] md:w-1/4 md:absolute ">
      <div className="py-8 w-full flex m-auto justify-center border-b-2 text-lg font-semibold">
        <p>Find a Location</p>
      </div>
        <div className="flex flex-col">
          {props.churches.map((church) => {
            return (
              <IglesiasCard
                key={church.id}
                name={church.name}
                location={church.location}
                description={church.address}
                image={church.images.main}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IglesiasMapListLeft;
