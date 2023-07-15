import { useGlobalContext } from "@/pages/context";
import clsx from "clsx";
import React, { useContext } from "react";

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
    figure: "0",
    percentage: "+14%",
    style: "text-red-600",
  },
  {
    id: 3,
    applicants: "job views",
    figure: "11",
    percentage: "+36%",
    style: "text-[#38CB89]",
  },
  {
    id: 4,
    applicants: "sub admin created",
    figure: "3",
  },
];

const targetId = 4;
const cardId = 1;

export const DashboardCards = () => {
  const { adminCount, setAdminCount } = useGlobalContext();
  const { applicantSum, setApplicantSum } = useGlobalContext();

  console.log(adminCount);
  return (
    <div className=" grid grid-cols-4 gap-[clamp(0.5rem,1.5vw,1rem)] ">
      {data.map((item) => {
        const { id, applicants, figure, percentage, style } = item;
        let sectionContent;
        if (id === cardId) {
          sectionContent = (
            <section>
              <section key={id}>
                <h4 className="text-[0.8rem] font-normal tracking-[1px] text-[#9d7474]">
                  {applicants.toUpperCase()}
                </h4>
                <div className="flex items-center justify-between w-full">
                  <h2 className="font-semibold text-[clamp(1rem,2vw,1.5rem)]">
                    {applicantSum?.length}
                  </h2>
                </div>
              </section>
            </section>
          );
        } else if (id === targetId) {
          sectionContent = (
            <section key={id}>
              <h4 className="text-[0.8rem] font-normal tracking-[1px] text-[#9d7474]">
                {applicants.toUpperCase()}
              </h4>
              <div className="flex items-center justify-between w-full">
                <h2 className="font-semibold text-[clamp(1rem,2vw,1.5rem)]">
                  {adminCount}
                </h2>
                <p className={clsx(style)}>{percentage}</p>
              </div>
            </section>
          );
        } else {
          sectionContent = (
            <section key={id}>
              <h4 className="text-[0.8rem] font-normal tracking-[1px] text-[#9d7474]">
                {applicants.toUpperCase()}
              </h4>
              <div className="flex items-center justify-between w-full">
                <h2 className="font-semibold text-[clamp(1rem,2vw,1.5rem)]">
                  {figure}
                </h2>
              </div>
            </section>
          );
        }
        return (
          <article
            className="border border-[#E4E4E7] flex flex-col gap-4 items-start py-3 px-4 rounded-lg bg-white"
            key={id}
          >
            {sectionContent}
          </article>
        );
      })}
    </div>
  );
};
