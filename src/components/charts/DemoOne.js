
import * as echarts from 'echarts';
import React, { useEffect } from 'react';

export const DemoOneChart = () => {

useEffect(() => {
const chartDom = document.getElementById('main1');
const myChart = echarts.init(chartDom);

const option = {  
  title: {
    text: 'Gross Return Benchmark ',
     subtext: '',
       left: '3%',
     right: '4%',
     top: '2%',
   },
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'shadow'
     }
   },
   legend: {
      
     left: '33%',
     right: '4%',
     top: '6%',
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '5%',
      top: '20%',
     containLabel: true
   },
   xAxis: [
     {
       type: 'category',
       data: ['1995', '2000', '2005', '2010', '2015', '2020']
     }
   ],
   yAxis: [
     {
       type: 'value'
     }
   ],
   series: [
     
     {
       name: 'Fixed Income',
       type: 'bar',
       stack: 'Ad',
        barWidth: 10,
       emphasis: {
         focus: 'series'
       },
       data: [120, 132, 101, 134, 90, 230]
     },
     {
       name: 'Equities',
       type: 'bar',
       stack: 'Ad',
       emphasis: {
         focus: 'series'
       },
       data: [220, 182, 191, 234, 290, 330]
     },
     {
       name: 'Alternatives',
       type: 'bar',
       stack: 'Ad',
       emphasis: {
         focus: 'series'
       },
       data: [150, 232, 201, 154, 190, 330]
     },
     {
       name: 'Return Objective Benchmark',
       type: 'bar',
        barWidth: 10,
       data: [762, 818, 864, 926, 1079, 1200],
       emphasis: {
         focus: 'series'
       },
  
     },
     {
           
       name: 'Fixed Income',
       type: 'bar',
      
       stack: 'Search Engine',
       emphasis: {
         focus: 'series'
       },
       data: [120, 132, 201, 234, 290, 330]
     },
     {
       name: 'Equities',
       type: 'bar',
       stack: 'Search Engine',
        barWidth: 5,
       emphasis: {
         focus: 'series'
       },
       data: [620, 732, 601, 634, 1090, 1030]
     },
        
     {
       markLine: {
         lineStyle: {
           type: 'dashed'
         },
         data: [[{ type: 'min' }, { type: 'max' }]]
       },
       name: 'Alternatives',
       type: 'bar',
       stack: 'Search Engine',
       emphasis: {
         focus: 'series'
       },
       data: [122, 152, 162, 158, 299, 240]
       
     },
         
   ]
};
option && myChart.setOption(option);

// Clean up when the component unmounts
return () => {
  myChart.dispose();
};
}, []);
    return <div id='main1' style={{ width: '100%', height: '400px' }}></div>
};
export default DemoOneChart;