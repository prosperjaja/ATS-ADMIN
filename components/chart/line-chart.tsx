import React from "react";
// import faker from "faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = [
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
];
const data = {
  labels,

  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
      borderColor: "#5cd49e",
      backgroundColor: "#f6f8ff",
      lineTension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Percentage of interviewed applicants and hired applicants",
    },
  },
};

export const LineBar = () => {
  return (
    <section className="!w-[clamp(15.87rem,39vw,38.75rem)]">
      <Line
        options={{
          ...options,
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              stacked: true,
              grid: {
                display: false,
              },
            },
          },
        }}
        data={data}
      />
    </section>
  );
};

export default LineBar;
