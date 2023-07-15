import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ActivityUpdate } from "./activity-update";
import { LatestArticle } from "./latest-article";
import { LineBar } from "../chart/line-chart";

const url = "https://ats-admin-dashboard.onrender.com/api/job/activity_log";

export const Chart = () => {
  const [activity, setActivity] = useState(null);

  const activityFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setActivity(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    activityFetch();
  }, []);

  return (
    <main>
      {/* THE DASHBOARD CHART */}
      <section className=" py-2 px-[clamp(0.9rem,2vw,1.5rem)] rounded-lg bg-white min-h-[30vh] flex flex-col gap-4 justify-between">
        {" "}
        <article className="flex items-center justify-between">
          <h2 className="text-base font-semibold">Applications</h2>

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
          <ActivityUpdate activity={activity} />
        </article>
      </section>
    </main>
  );
};
