
import * as echarts from 'echarts';
import React, { useEffect } from 'react';

export const DemoTwoChart = () => {

useEffect(() => {
const chartDom = document.getElementById('main2');
const myChart = echarts.init(chartDom);

const option = {
  title: {
    text: 'Portfolio Benchmark ',
     subtext: '60% Equity 40% Fixed Income'
   },
   tooltip: {
     trigger: 'axis',
     axisPointer: {
       type: 'cross'
     }
   },
   toolbox: {
     show: true,
     feature: {
       saveAsImage: {}
     }
   },
   xAxis: {
     type: 'category',
     boundaryGap: false,
     // prettier-ignore
     data:  ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021', '2022']
   },
   yAxis: {
     type: 'value',
     axisLabel: {
       formatter: '{value}'
     },
     axisPointer: {
       snap: true
     }
   },
   visualMap: {
     show: false,
     dimension: 0,
     pieces: [
       {
         lte: 6,
         color: 'green'
       },
       {
         gt: 6,
         lte: 9,
         color: 'red'
       },
       {
         gt: 9,
         lte: 20,
         color: 'green'
       },
       {
         gt: 20,
         lte: 21,
         color: 'red'
       },
       {
         gt: 21,
         color: 'green'
       }
     ]
   },
   series: [
     {
       name: 'Total Value',
       type: 'line',
       smooth: true,
      stack:'ss',
       // prettier-ignore
       data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700,780,820,840, 600, 400,550],
       markArea: {
         itemStyle: {
           color: 'rgba(255, 173, 177, 0.4)'
                     },
         
         data: [
           [
             {
               name: 'Great Depression',
               xAxis: '2007'
             },
             {
               xAxis: '2009'
             }
           ],
           [
             {
               name: 'Covid-19 Pandemic',
               xAxis: '2020'
             },
             {
               xAxis: '2021'
             },
           ]
         ]
               }, 
       
       
     }
     ,{
       name: 'Fund Value',
       type: 'line',
       smooth: true,
      stack:'sss',
       // prettier-ignore
       
       data:[300, 280,260, 270, 260, 340, 520, 570, 420, 380, 370, 380, 420, 520, 630, 780, 870, 600,780,840,870, 580, 350,590],
     }
   ]

};
option && myChart.setOption(option);

// Clean up when the component unmounts
return () => {
  myChart.dispose();
};
}, []);
    return <div id='main2' style={{ width: '100%', height: '500px' }}></div>
};
export default DemoTwoChart;