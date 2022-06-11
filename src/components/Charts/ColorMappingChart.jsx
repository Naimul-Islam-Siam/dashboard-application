import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, RangeColorSettingsDirective, RangeColorSettingDirective, Inject, Tooltip, Legend } from '@syncfusion/ej2-react-charts';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMappingChart = () => {
   const { currentThemeMode } = useStateContext();

   return (
      <ChartComponent
         id="charts"
         primaryXAxis={ColorMappingPrimaryXAxis}
         primaryYAxis={ColorMappingPrimaryYAxis}
         chartArea={{ border: { width: 0 } }}
         legendSettings={{ mode: 'Range', background: 'white' }}
         tooltip={{ enable: true }}
         background={currentThemeMode === 'Dark' ? '#33373E' : '#fff'}
      >
         <SeriesCollectionDirective>
            <SeriesDirective
               dataSource={colorMappingData[0]}
               name="USA"
               xName="x"
               yName="y"
               type="Column"
               cornerRadius={{
                  topLeft: 10,
                  topRight: 10,
               }}
            />
         </SeriesCollectionDirective>
         <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
         </RangeColorSettingsDirective>

         <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
      </ChartComponent>
   );
};

export default ColorMappingChart;