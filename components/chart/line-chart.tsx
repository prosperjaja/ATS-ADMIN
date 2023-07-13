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

const labels = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const data = {
  labels,

  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
      text: "Percentage of applicants and hired staffs",
    },
  },
};

export const LineBar = () => {
  return (
    <section className="!w-[clamp(21.87rem,44vw,43.75rem)]">
      <Line options={options} data={data} />
    </section>
  );
};

export default LineBar;
