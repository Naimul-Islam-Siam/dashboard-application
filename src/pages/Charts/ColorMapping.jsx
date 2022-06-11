import React from "react";
import { Header, ColorMappingChart } from "../../components";

const ColorMapping = () => {
   return (
      <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl bg:white dark:bg-secondary-dark-bg" >
         <Header category="Color Mapping Chart" title="USA CLIMATE - WEATHER BY MONTH" />
         <div className="w-full">
            <ColorMappingChart />
         </div>
      </div >
   );
};

export default ColorMapping;