import React from "react";

const ServiceTimesTab = (props) => {
  console.log(props.res.services[0].name);

  return (
    <div className="bg-white rounded-lg shadow-lg   w-11/12 m-auto">
      <div className="contetn w-11/12 m-auto p-8">
        <p className="font-semibold text-2xl">Horarios de Servicio</p>
        {props.res.services.map((service) => {
          return (
            <div className="py-4 ">
              <p className="text-sm text-white/50">{service.name}</p>
              <p>{service.day}</p>
              <p className="font-semibold text-lg">{service.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceTimesTab;
