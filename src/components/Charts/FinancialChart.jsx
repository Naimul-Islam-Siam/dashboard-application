import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloSeries, DateTime, Zoom, Logarithmic, Crosshair, Tooltip, Inject } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const FinancialChart = () => {
   const { currentThemeMode } = useStateContext();

   return (
      <ChartComponent
         id="charts"
         primaryXAxis={FinancialPrimaryXAxis}
         primaryYAxis={FinancialPrimaryYAxis}
         chartArea={{ border: { width: 0 } }}
         tooltip={{ enable: true, shared: true }}
         crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
         background={currentThemeMode === 'Dark' ? '#33373E' : '#fff'}
      >
         <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
         <SeriesCollectionDirective>
            <SeriesDirective
               dataSource={financialChartData}
               xName="x"
               yName="low"
               name="Apple Inc"
               type="Hilo"
               low="low"
               high="high"
            />
         </SeriesCollectionDirective>
      </ChartComponent>
   );
};

export default FinancialChart;