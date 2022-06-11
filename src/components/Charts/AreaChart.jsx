import React from "react";
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, SplineAreaSeries, DateTime, Legend, Inject } from "@syncfusion/ej2-react-charts";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const AreaChart = () => {
   const { currentThemeMode } = useStateContext();

   return (
      <ChartComponent
         id="line-chart"
         height="420px"
         primaryXAxis={areaPrimaryXAxis}
         primaryYAxis={areaPrimaryYAxis}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true }}
         background={currentThemeMode === "Dark" ? "#33373e" : "#fff"}
         legendSettings={{ background: 'white' }}
      >
         <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
               <SeriesDirective key={index} {...item} />
            ))}
         </SeriesCollectionDirective>
         <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      </ChartComponent>
   );
};

export default AreaChart;