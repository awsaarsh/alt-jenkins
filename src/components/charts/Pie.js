
import * as echarts from 'echarts';
import React, { useEffect } from 'react';

export const PieChart = () => {

useEffect(() => {
const chartDom = document.getElementById('main');
const myChart = echarts.init(chartDom);

const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b} ({d}%)'
  },
    
  legend: {
   
   text:'ss',
    
    data: [
      'Equity',
      'Fixed Income',
      'Alternatives',
      'Cash & Other',
       
    ]
    
  },
   
  series: [
    {
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [40, '30%'],
      label: {
        position: 'inner',
        fontSize: 7
      },
      labelLine: {
        
      },
      data: [
        { value: 1548, name: 'Equity' },
        { value: 775, name: 'Fixed Income' },
        { value: 679, name: 'Alternatives', selected: true },
        { value: 67, name: 'Cash & Other', selected: false }
      ]
    },
    {
      name: 'Sub-Asset Class',
      type: 'pie',
      radius: ['55%', '70%'],
      
      labelLine: {
        length: 20,
        
      },
      
     
      label: {
      show:false,
        formatter: '   {b}({d}%)  ',
        backgroundColor: '#F6FA8C',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      
      data: [
        { value: 748, name: 'Public Equity' , itemstyle: {color:'#4C5058'}},
        { value: 235, name: 'Private Equity',itemstyle: {color:'#4C5058'} },
        { value: 310, name: 'Public Debt',itemstyle: {color:'#4C5058'} },
        { value: 151, name: 'Private Debt' },
        { value: 234, name: 'Real Assets' },
        { value: 147, name: 'Infrastructure' },
        { value: 35, name: 'Cash & Other' },
        
      ]
      
      
    }
  ]
};
option && myChart.setOption(option);

// Clean up when the component unmounts
return () => {
  myChart.dispose();
};
}, []);
    return <div id='main' style={{ width: '100%', height: '300px' }}></div>
};
export default PieChart;