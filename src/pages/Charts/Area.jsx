import React from "react";
import { Header, AreaChart } from "../../components";

const Area = () => {
   return (
      <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl bg:white dark:bg-secondary-dark-bg">
         <Header category="Area" title="Inflation Rate in Percentage" />
         <div className="w-full">
            <AreaChart />
         </div>
      </div>
   );
};

export default Area;