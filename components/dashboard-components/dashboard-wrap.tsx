import React from "react";
import { Chart } from "./chart";
import { DashboardJobs } from "./dashboard-jobs";

export const DashboardWrap = () => {
  return (
    <div className="grid grid-cols-[1fr_clamp(17.625rem,37vw,37.25rem)] bg-[#F5F5F5] gap-[clamp(0.5rem,1.2vw,1rem)] pt-4">
      <Chart />
      <DashboardJobs />
    </div>
  );
};
