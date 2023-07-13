import React, { useState } from "react";
import Image from "next/image";
import { ActivityUpdate } from "./activity-update";
import { LatestArticle } from "./latest-article";
import { LineBar } from "../chart/line-chart";

export const Chart = () => {
  return (
    <main>
      {/* THE DASHBOARD CHART */}
      <section className=" py-2 px-[clamp(0.9rem,2vw,1.5rem)] rounded-lg bg-white min-h-[30vh] flex flex-col gap-4 justify-between">
        {" "}
        <article className="flex items-center justify-between">
          <h2 className="text-base font-semibold">Applications</h2>
          {/* <div className="flex items-center gap-[clamp(0.9rem,1.3vw,1.25rem)]">
            <h3 className="hover:border-2 hover:border-[#F5F5F5] hover:p-2 hover:text-black hover:rounded-md text-[#948E8E] font-semibold">
              12 months
            </h3>
            <h3 className="hover:border-2 hover:border-[#F5F5F5] hover:p-2 hover:text-black hover:rounded-md text-[#948E8E] font-semibold">
              6 months
            </h3>
            <h3 className="hover:border-2 hover:border-[#F5F5F5] hover:p-2 hover:text-black hover:rounded-md text-[#948E8E] font-semibold">
              30 days
            </h3>
            <h3 className="hover:border-2 hover:border-[#F5F5F5] hover:p-2 hover:text-black hover:rounded-md text-[#948E8E] font-semibold">
              7 days
            </h3>
          </div> */}
          <button className="flex items-center gap-2 border-2 border-[#F5F5F5] p-2 rounded-md">
            <Image src={"/images/copy.svg"} alt="file" width={20} height={20} />
            <h3 className="font-semibold text-base ">Export PDF</h3>
          </button>
        </article>
        <div className="flex items-center justify-center">
          <LineBar />
        </div>
      </section>
      {/* ACTIVITIES AND LATEST ARTICLES */}
      <section className="flex gap-2 items-center pt-4">
        <article className="border border-[#dddddd] bg-white rounded-lg px-[clamp(0.9rem,2vw,1.875rem)] py-4 h-[40vh] w-full overflow-y-scroll article-scroll">
          <h3 className="text-base font-semibold text-[#18181B]">Activities</h3>
          <ActivityUpdate />
        </article>
        {/* <article className="border border-[#dddddd] bg-white rounded-lg px-[clamp(0.9rem,2vw,1.875rem)] py-4 h-[45vh] overflow-y-scroll w-full article-scroll">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-[#18181B]">
              Latest articles
            </h3>
            <p className="flex items-center  gap-1 text-[#E1891C]">
              view articles{" "}
              <span>
                <Image
                  src={"/images/cheveron-right-red.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
              </span>
            </p>
          </div>
          <LatestArticle />
        </article> */}
      </section>
    </main>
  );
};
