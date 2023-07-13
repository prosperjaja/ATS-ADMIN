import React from "react";
import Image from "next/image";
import { JobListMap } from "./job-list-map";

export const DashboardJobs = () => {
  return (
    <main className="">
      <header className="bg-white p-4 rounded-lg  w-full ">
        <section className="flex flex-col gap-3">
          <h3 className="text-base text-[#18181B] font-semibold">Jobs</h3>
          <p className="text-sm font-medium text-[#71717A]">
            List of all job entries in the past days
          </p>
          <div className="flex items-center gap-4">
            <p className="hover:border-2 hover:border-[#F5F5F5] hover:p-1 hover:text-black hover:rounded-md text-[#948E8E] font-medium">
              1wk
            </p>
            <p className="hover:border-2 hover:border-[#F5F5F5] hover:p-1 hover:text-black hover:rounded-md text-[#948E8E] font-medium">
              2wks
            </p>
            <p className="hover:border-2 hover:border-[#F5F5F5] hover:p-1 hover:text-black hover:rounded-md text-[#948E8E] font-medium">
              3wks
            </p>
            <p className="hover:border-2 hover:border-[#F5F5F5] hover:p-1 hover:text-black hover:rounded-md text-[#948E8E] font-medium">
              4wks
            </p>
          </div>
        </section>
        <section className="py-6 h-[58.5vh] overflow-y-scroll article-scroll">
          <JobListMap />
          <div className="flex items-center  hover:cursor-pointer ">
            <h3 className=" text-[#A1A1AA] font-medium hover:text-[#000] p-2">
              SEE ALL JOBS
            </h3>
            <Image
              src={"/images/cheveron-right.svg"}
              alt=">"
              width={18}
              height={18}
            />
          </div>
        </section>
      </header>
    </main>
  );
};
