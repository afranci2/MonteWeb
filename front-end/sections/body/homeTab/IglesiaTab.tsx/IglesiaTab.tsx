import React from "react";
import ServiceTimesTab from "../../../../components/tab/sideTab/ServiceTimesTab";
import ChurchMainTab from "../../../../components/tab/sideTab/ChurchMainTab";

import MobileCard from "../../../../components/mobileCard/MobileCard";
import DefaultBody from "../../../../sections/body/defaultBody/DefaultBody";
import TextLeftTab from "../../../../components/tab/textLeftTab/TextLeftTab";
import TextRightTab from "../../../../components/tab/textRightTab/TextRightTab";

const IglesiaTab = ({ res }) => {
  return (
    <div>
      {" "}
      <div className="tabs-section w-full bg-[#f7f7f7]">
        <div className="py-8">    
          <ServiceTimesTab res={res}/>
        </div>
        <div>
            <ChurchMainTab res={res}/>
        </div>
      </div>
    </div>
  );
};

export default IglesiaTab;
