import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Sort, Filter, Edit, Inject, Toolbar } from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
   const selectionsettings = { persistSelection: true };
   const toolbarOptions = ["Delete"];
   const editing = { allowDeleting: true, allowEditing: true };

   return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
         <Header category="Page" title="Customers" />
         <GridComponent dataSource={customersData} toolbar={toolbarOptions} selectionSettings={selectionsettings} editSettings={editing} enableHover={false} allowPaging allowSorting>
            <ColumnsDirective>
               {customersGrid.map((item, index) =>
                  <ColumnDirective key={index} {...item} />
               )}
            </ColumnsDirective>
            <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
         </GridComponent>
      </div>
   );
};

export default Customers;