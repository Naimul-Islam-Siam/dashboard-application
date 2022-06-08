import React from "react";
import { ScheduleComponent, ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars"
import { Header } from "../components";
import { scheduleData } from "../data/dummy";

const Calendar = () => {
   return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl bg-white">
         <Header category="App" title="Calendar" />
         <ScheduleComponent height="650px" eventSettings={{ dataSource: scheduleData }} selectedDate={new Date(2021, 0, 10)}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
         </ScheduleComponent>
      </div>
   );
};

export default Calendar;