import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from "@syncfusion/ej2-react-grids"
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
   return (
      <div className="m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
         <Header category="Page" title="Employees" />
         <GridComponent dataSource={employeesData} toolbar={["Search"]} width="auto" allowPaging allowSorting>
            <ColumnsDirective>
               {employeesGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
               ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar]} />
         </GridComponent>
      </div>
   );
};

export default Employees;