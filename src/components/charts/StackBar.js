import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart - Stacked',
//     },
//   },
//   responsive: true,
//   scales: {
//     x: {
//       stacked: false,
//     },
//     y: {
//       stacked: false,
//     },
//   },
// };

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const dataTemplate = (borderRadius1, borderRadius2) => ({
  labels,
  datasets: [
    {
      label: "Name",
      data: labels.map(() => faker.datatype.number({ min: -100, max: 70 })),
      backgroundColor: "#0f121bde",
      borderRadius: borderRadius1,
      borderSkipped: false,
    },
    {
      label: "Stretegy",
      data: labels.map(() => faker.datatype.number({ min: -100, max: 50 })),
      backgroundColor: "#212d43d6",
      borderRadius: borderRadius2,
      borderSkipped: false,
    },
  ],
});

export function StackBar({ borderRadius1, borderRadius2, stacked }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: `Chart.js Bar Chart - ${stacked ? "Stacked" : "Side by Side"}`,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: stacked,
      },
      y: {
        stacked: stacked,
      },
    },
  };

  const data = dataTemplate(borderRadius1, borderRadius2);
  return <Bar options={options} data={data} />;
}
