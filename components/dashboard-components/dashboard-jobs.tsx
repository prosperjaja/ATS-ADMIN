import React, { useState, useEffect } from "react";
import Image from "next/image";
import { JobListMap } from "./job-list-map";
import { LoadingOverlay } from "@mantine/core";
import Link from "next/link";

const url = "https://ats-admin-dashboard.onrender.com/api/job/days_ago_jobs";

export const DashboardJobs = () => {
  const [timeFrame, setTimeFrame] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchTime = async (query) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const formData = new FormData();
      formData.append("days", query);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      setTimeFrame(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [days, setDays] = useState(7);

  useEffect(() => {
    fetchTime(days);
  }, [days]);

  return (
    <main className="">
      <header className="bg-white p-4 rounded-lg  w-full ">
        <section className="flex flex-col gap-3">
          <h3 className="text-base text-[#18181B] font-semibold">Jobs</h3>
          <p className="text-sm font-medium text-[#71717A]">
            List of all job entries in the past days
          </p>
          <div className="flex items-center gap-8">
            <p
              onClick={() => setDays(7)}
              className="border-2 :border-[#F5F5F5] p-1 hover:text-black hover:border-black rounded-md text-[#948E8E] font-medium cursor-pointer"
            >
              1wk
            </p>
            <p
              onClick={() => setDays(14)}
              className="border-2 :border-[#F5F5F5] p-1 hover:text-black hover:border-black rounded-md text-[#948E8E] font-medium cursor-pointer"
            >
              2wks
            </p>
            <p
              onClick={() => setDays(21)}
              className="border-2 :border-[#F5F5F5] p-1 hover:text-black hover:border-black rounded-md text-[#948E8E] font-medium cursor-pointer"
            >
              3wks
            </p>
            <p
              onClick={() => setDays(28)}
              className="border-2 :border-[#F5F5F5] p-1 hover:text-black hover:border-black rounded-md text-[#948E8E] font-medium cursor-pointer"
            >
              4wks
            </p>
          </div>
        </section>
        <section className="py-6 h-[60.5vh] overflow-y-scroll article-scroll">
          <JobListMap timeFrame={timeFrame} />
          <div className="flex items-center  hover:cursor-pointer ">
            <Link href={"/jobs"}>
              <h3 className=" text-[#A1A1AA] font-medium hover:text-[#000] p-2">
                SEE ALL JOBS
              </h3>
            </Link>
            <Image
              src={"/images/cheveron-right.svg"}
              alt=">"
              width={18}
              height={18}
            />
          </div>
        </section>
      </header>
      <LoadingOverlay visible={loading} />
    </main>
  );
};
