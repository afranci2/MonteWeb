import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const IglesiasCard = ({ name, location, description, image }) => (
  <div>
    <div className="w-full border-b-2 z-50 p-12 flex gap-8">
      <Image
        className="rounded-lg object-cover"
        width={80}
        height={100}
        src={image}
        alt="church-image"
      />
      <div className="text text-lg font-semibold">
        <p className="font-semibold">{name}</p>
        <p>{location}</p>
        <p>{description}</p>
      </div>
      <IoIosArrowForward />
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
