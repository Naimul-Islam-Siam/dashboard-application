import React from "react";
import { Header, FinancialChart } from "../../components";

const Financial = () => {
   return (
      <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl bg:white dark:bg-secondary-dark-bg">
         <Header category="Financial Chart" title="Apple Historical" />
         <div className="w-full">
            <FinancialChart />
         </div>
      </div>
   );
};

export default Financial;