import React from 'react';
import { SparklineComponent, SparklineTooltip, Inject } from "@syncfusion/ej2-react-charts";

const SparkLineChart = ({ id, height, width, color, data, type, currentColor }) => {
   return (
      <SparklineComponent
         id={id}
         height={height}
         width={width}
         fill={color}
         lineWidth={1}
         valueType="Numeric"
         border={{ width: 2, color: currentColor }}
         dataSource={data}
         type={type}
         xName="x"
         yName="yval"
         tooltipSettings={{
            visible: true,
            // eslint-disable-next-line no-template-curly-in-string
            format: '${x} : data ${yval}',
            trackLineSettings: {
               visible: true
            }
         }}
         markerSettings={{
            visible: ['All'],
            size: 2.5,
            fill: currentColor
         }}
      >
         <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
   );
};

export default SparkLineChart;