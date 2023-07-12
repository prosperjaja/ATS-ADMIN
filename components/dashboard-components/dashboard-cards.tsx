import clsx from "clsx";
import React from "react";

// const dataType: {
//   id: number;
//   applicants: string;
//   figure: string;
//   percentage: string;
// }[];

const data = [
  {
    id: 1,
    applicants: "total applicants",
    figure: "2,426",
    percentage: "+36%",
    style: "text-[#38CB89]",
  },
  {
    id: 2,
    applicants: "total assessments taken",
    figure: "485",
    percentage: "+14%",
    style: "text-red-600",
  },
  {
    id: 3,
    applicants: "job views",
    figure: "2,426",
    percentage: "+36%",
    style: "text-[#38CB89]",
  },
  {
    id: 4,
    applicants: "sub admin created",
    figure: "3",
  },
];

export const DashboardCards = () => {
  return (
    <div className=" grid grid-cols-4 gap-[clamp(0.5rem,1.5vw,1rem)] ">
      {data.map((item) => {
        const { id, applicants, figure, percentage, style } = item;
        return (
          <article
            className="border border-[#E4E4E7] flex flex-col gap-4 items-start py-3 px-4 rounded-lg bg-white"
            key={id}
          >
            <h4 className="text-[0.8rem] font-normal tracking-[1px] text-[#9d7474]">
              {applicants.toUpperCase()}
            </h4>
            <div className="flex items-center justify-between w-full ">
              <h2 className="font-semibold text-[clamp(1rem,2vw,1.5rem)]">
                {figure}
              </h2>
              <p className={clsx(style)}>{percentage}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
