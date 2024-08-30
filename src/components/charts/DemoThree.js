
import * as echarts from 'echarts';
import React, { useEffect } from 'react';

export const DemoThreeChart = () => {

useEffect(() => {
const chartDom = document.getElementById('main4');
const myChart = echarts.init(chartDom);

const option = {  
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016'],
      ['Matcha Latte', 43.3, 85.8],
      ['Milk Tea', 83.1, 73.4],
      ['Cheese Cocoa', 86.4, 65.2],
      ['Walnut Brownie', 72.4, 53.9]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }]
};
option && myChart.setOption(option);

// Clean up when the component unmounts
return () => {
  myChart.dispose();
};
}, []);
    return <div id='main4' style={{ width: '100%', height: '500px' }}></div>
};
export default DemoThreeChart;