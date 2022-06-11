import React from "react";
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, DateTime, Legend, Tooltip, Inject } from "@syncfusion/ej2-react-charts";
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
   const { currentThemeMode } = useStateContext();

   return (
      <ChartComponent
         id="line-chart"
         height="420px"
         primaryXAxis={LinePrimaryXAxis}
         primaryYAxis={LinePrimaryYAxis}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         background={currentThemeMode === "Dark" ? "#33373e" : "#fff"}
         legendSettings={{ background: 'white' }}
      >
         <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => (
               <SeriesDirective key={index} {...item} />
            ))}
         </SeriesCollectionDirective>

         <Inject services={[LineSeries, DateTime, Tooltip, Legend]} />
      </ChartComponent>
   );
};

export default LineChart;