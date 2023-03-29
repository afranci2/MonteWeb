import React from "react";

const ServiceTimesTab = (props) => {

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
      <div className="contetn w-11/12 m-auto p-8">
        <p className="font-semibold text-2xl">Horarios de Servicio</p>
        {props.res.map((service) => {
          return (
            <div className="py-4 ">
              <p className="text-sm text-white/50">{service.name}</p>
              <p>{service.day}</p>
              <p className="font-semibold text-lg">{service.start_time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceTimesTab;
