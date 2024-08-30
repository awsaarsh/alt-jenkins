
import React, { useEffect } from 'react';
import Plotly from 'plotly.js';

export const DemoFourChart = () => {


  useEffect(() => {
    // Generate random data
    const y0 = [];
    for (let i = 0; i < 20; i++) {
      y0.push(Math.random() + (i * 0.2));
    }

    const y1 = [];
    for (let i = 40; i < 80; i++) {
      y1.push(Math.random() + (i * 0.15));
    }

    const y2 = [];
    for (let i = 30; i < 100; i++) {
      y2.push(Math.random() + (i * 0.15));
    }

    const y3 = [];
    for (let i = -10; i < 50; i++) {
      y3.push(Math.random() + (i * 0.4));
    }

    // Create a trace for each set of data
    const trace0 = {
      y: y0,
      type: 'box',
      name: 'Bonds',
      boxpoints: 'outliers',
      jitter: 0.3,
    };

    const trace1 = {
      y: y1,
      type: 'box',
      name: 'Equity',
      boxpoints: 'outliers',
      jitter: 0.3,
    };

    const trace2 = {
      y: y2,
      type: 'box',
      name: 'Real assets',
      boxpoints: 'outliers',
      jitter: 0.3,
    };

    const trace3 = {
      y: y3,
      type: 'box',
      name: 'Private markets',
      boxpoints: 'outliers',
      jitter: 0.3,
    };

    // Combine the traces into a data array
    const data = [trace0, trace1, trace2, trace3];

    // Set the layout options
    const layout = {
      title: 'Interquartile range of Asset Classes',
      tooltip: false,
      yaxis: {
        title: 'Annualized Returns',
      },
    };

    // Create the plot
    Plotly.newPlot('plot', data, layout);
    return () => {
      const plot = document.getElementById('plot');
      if (plot) Plotly.purge(plot);
    };
  }, []);

  return <div id='plot' style={{ width: '100%', height: '500px' }}></div>
};
export default DemoFourChart;