import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const url = "https://ats-admin-dashboard.onrender.com/api/job/activity_log";

export const AdminActivityUpdate = () => {
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
    <section>
      {activity?.map((item) => {
        return (
          <ul key={item.id} className="rounded-xl pt-6">
            <li className="flex items-end justify-between gap-4 border-b border-[#dddddd] pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/greencase.svg"}
                  alt={"job"}
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.data}</h3>
                  <p className="text-base text-[#5E606A]">
                    By{" "}
                    <span className="underline text-[#5E606A]">
                      {item.actor}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-base text-[#5E606A]">{item.get_timesince}</p>
            </li>
          </ul>
        );
      })}
    </section>
  );
};
