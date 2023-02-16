"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Dropdown = () => {

    const handleOptionChange = (refname) => {
        refname.current.scrollIntoView({ behavior: 'smooth' });

    };
    return (
    <div>
      {" "}
      <select
        className="text-black p-8 border-2 rounded-lg w-screen"
        onChange={handleOptionChange}
      >
        <option value="/conocernos/creencias">Creencias Fundamentales</option>
        <option value="/conocernos/historia">Historia</option>
        <option value="/iglesias">Obra Misionera</option>
        <option value="/conocernos/lideres">Lideres</option>
        <option value="/conocernos/mensaje-del-presidente">Un Mensaje Del Presidente</option>
      </select>
    </div>
  );
};

export default Dropdown;

{/*import React, { useRef, forwardRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      This is the section to scroll to
    </div>
  );
});

function MyComponent() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Welcome to my page</h1>
      <p>Some content goes here...</p>
      <ChildComponent ref={sectionRef} />
      <p>More content goes here...</p>
      <Button onClick={scrollToSection}>Scroll to section</Button>
    </div>
  );
}

export default MyComponent;
*/}