import React from "react";
import { Checkbox } from "@mantine/core";
import { useState } from "react";

const initialValue = {
  keyword: "",
  Location: "",
};

const url = "https://ats-admin-dashboard.onrender.com/api/job/job_list_create";

export const JobTypes = () => {
  const [search, setSearch] = useState(initialValue);

  const handleFilter = async () => {
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
      setSearch(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <article className="bg-white rounded-xl px-[2rem] py-8">
        {/* filter header */}
        <div className="flex justify-between items-center pb-4">
          <h3 className="text-[#252735] font-semibold text-[clamp(0.9rem,2vw,1.5rem)]">
            Filter Jobs
          </h3>
          <p className="text-[#948E8E] font-semibold">Clear</p>
        </div>
        {/* input section */}
        <section>
          <div className="flex flex-col gap-4">
            <p className="text-[#252735] text-sm font-medium">Keyword</p>
            <input
              className="border border-[#D0D5DD] py-3 w-full rounded-lg px-2 outline-none"
              type="text"
              placeholder="Enter Keyword"
              value={search.keyword}
              onChange={(e) =>
                setSearch({ ...search, keyword: e.target.value })
              }
            />
            <p className="text-[#252735] text-sm font-medium">Location</p>
            <input
              className="border border-[#D0D5DD] py-3 w-full rounded-lg px-2 outline-none"
              type="text"
              placeholder="Enter Location"
              value={search.Location}
              onChange={(e) =>
                setSearch({ ...search, Location: e.target.value })
              }
            />
          </div>
          {/* checkboxes */}
          <ul className="flex flex-col gap-4 py-[3rem]">
            <li className="text-[#252735] text-base font-medium">
              Skill-Level
            </li>
            <li className="text-[#252735] text-sm font-medium flex items-center gap-1">
              {" "}
              <Checkbox
                styles={{
                  input: {
                    background: "#F1F2F3",
                    border: "none",
                  },
                }}
              />{" "}
              <span>Junior</span>{" "}
            </li>
            <li className="text-[#252735] text-sm font-medium flex items-center gap-1">
              {" "}
              <Checkbox
                styles={{
                  input: {
                    background: "#F1F2F3",
                    border: "none",
                  },
                }}
              />{" "}
              <span>Mid-Level</span>{" "}
            </li>
            <li className="text-[#252735] text-sm font-medium flex items-center gap-1">
              {" "}
              <Checkbox
                styles={{
                  input: {
                    background: "#F1F2F3",
                    border: "none",
                  },
                }}
              />{" "}
              <span>Senior</span>{" "}
            </li>
            <li className="text-[#252735] text-base font-medium">Job Type</li>
            <li className="text-[#252735] text-sm font-medium flex items-center gap-1">
              <Checkbox
                styles={{
                  input: {
                    background: "#F1F2F3",
                    border: "none",
                  },
                }}
              />{" "}
              <span>Remote</span>
            </li>
            <li className="text-[#252735] text-sm font-medium flex items-center gap-1">
              <Checkbox
                styles={{
                  input: {
                    background: "#F1F2F3",
                    border: "none",
                  },
                }}
              />{" "}
              <span>Hybrid</span>
            </li>
            <li className="text-[#252735] text-sm font-medium flex items-center gap-1">
              <Checkbox
                styles={{
                  input: {
                    background: "#F1F2F3",
                    border: "none",
                  },
                }}
              />{" "}
              <span>On-Site</span>
            </li>
          </ul>
        </section>
        <button
          onClick={handleFilter}
          className="w-full py-4 bg-[#38CB89] text-[clamp(0.5rem,1.5vw,1.1rem)] font-semibold text-white rounded-lg"
        >
          Apply Filters
        </button>
      </article>
    </main>
  );
};
