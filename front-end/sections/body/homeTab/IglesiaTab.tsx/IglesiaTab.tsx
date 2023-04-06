import React from "react";
import ServiceTimesTab from "../../../../components/tab/sideTab/ServiceTimesTab";
import ChurchMainTab from "../../../../components/tab/sideTab/ChurchMainTab";
import "../../../../components/tab/sideTab/ChurchMainTab.css";


const IglesiaTab = ({ services, socials, images, mainImage }) => {
  return (
    <div>
      {" "}
      <div className="tabs-section w-10/12 m-auto md:flex md:grid-cols-2">
        <div className="py-8">    
          <ServiceTimesTab res={services}/>
        </div>
        <div className="w-full py-8">
            <ChurchMainTab socials={socials} images={images} mainImage={mainImage}/>
        </div>
      </div>
    </div>
  );
};

export default IglesiaTab;
