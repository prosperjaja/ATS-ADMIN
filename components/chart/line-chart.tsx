import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

// const userDataList = [
//   {
//     date: 2014,
//     duration: "1 year",
//     applicants: "30",
//     interviewed: "25",
//     hired: "5",
//   },
//   {
//     date: 2015,
//     duration: "2 years",
//     applicants: "50",
//     interviewed: "40",
//     hired: "20",
//   },
//   {
//     date: 2016,
//     duration: "3 years",
//     applicants: "150",
//     interviewed: "20",
//     hired: "10",
//   },
//   {
//     date: 2017,
//     duration: "4 years",
//     applicants: "170",
//     interviewed: "90",
//     hired: "30",
//   },
//   {
//     date: 2018,
//     duration: "5 years",
//     applicants: "200",
//     interviewed: "120",
//     hired: "20",
//   },
//   {
//     date: 2019,
//     duration: "6 years",
//     applicants: "50",
//     interviewed: "20",
//     hired: "5",
//   },
//   {
//     date: 2020,
//     duration: "7 years",
//     applicants: "250",
//     interviewed: "200",
//     hired: "30",
//   },
//   {
//     date: 2021,
//     duration: "8 years",
//     applicants: "400",
//     interviewed: "290",
//     hired: "40",
//   },
//   {
//     date: 2022,
//     duration: "9 years",
//     applicants: "500",
//     interviewed: "320",
//     hired: "25",
//   },
//   {
//     date: 2023,
//     duration: "10 years",
//     applicants: "430",
//     interviewed: "200",
//     hired: "15",
//   },
// ];

const labels = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
export const data = {
  labels,
  datasets: [
    {
      label: "year 1",
      data: [32, 42, 51, 60, 51, 95],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 2",
      data: [32, 42, 51, 60, 51, 95],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 3",
      data: [20, 52, 59, 30, 45, 65],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 4",
      data: [37, 42, 41, 37, 41, 44],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 5",
      data: [40, 32, 61, 30, 21, 75],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 6",
      data: [40, 50, 31, 38, 41, 25],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 7",
      data: [60, 33, 45, 70, 22, 15],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 8",
      data: [26, 82, 51, 79, 43, 75],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 9",
      data: [54, 42, 21, 32, 41, 35],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
    {
      label: "year 10",
      data: [56, 65, 46, 29, 23, 54],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
    },
  ],
};

const options = {};

export const LineBar = () => {
  return (
    <section className="!w-[clamp(21.87rem,44vw,43.75rem)]">
      <Line options={options} data={data} />
    </section>
  );
};

export default LineBar;
