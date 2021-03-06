import React from "react";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { Header } from "../components";
import { kanbanData, kanbanGrid } from "../data/dummy";

const Kanban = () => {
   return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
         <Header category="App" title="Kanban" />
         <KanbanComponent id="kanban" dataSource={kanbanData} keyField="Status" cardSettings={{ contentField: "Summary", headerField: "Id" }} className="p-3 rounded-2xl">
            <ColumnsDirective>
               {kanbanGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
               ))}
            </ColumnsDirective>
         </KanbanComponent>
      </div>
   );
};

export default Kanban;