import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { faker } from '@faker-js/faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['U.S Bonds', 'Emer market equity', 'U.S Largecap', 'U.S Smallcap', 'Absolute', 'Hedge', 'Global Equity', 'Global Capital'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Electronic',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#A8A9AD',
      }
    ],
  };

export const SingleBarChart = () => {
    return(
        <><Bar options={options} data={data} /></>
    );
}
