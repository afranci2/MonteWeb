import React from 'react';

const IglesiasCard = ({ name, location, description }) => (
  <div>
    <div className="w-full bg-blue-400 p-8">
      <h1>{name}</h1>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default IglesiasCard;

/* <ul className="bg-black" key={church.id}>
<Link href="/[church]" as={`/${church.id}`}>
  <li key={church.id}>
    <p> {church.name}</p>
    <p> {church.phone}</p>
    <ul>
      {church.services.map((service) => (<li key={church.id}>
        <p>{service.name}</p>
        <p>{service.time}</p>
      </li>
      ))}
    </ul>
  </li>
</Link>
</ul> */
