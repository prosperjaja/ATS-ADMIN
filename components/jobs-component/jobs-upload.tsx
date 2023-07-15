import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AllJobsList } from "./all-jobs-list";
import { Button, Checkbox } from "@mantine/core";
import { JobTypes } from "./job-types";

export const JobsUpload = ({ open, setId, id }) => {
  return (
    <main className="grid grid-cols-[1fr_clamp(13rem,29vw,28.5rem)] gap-4 px-[2rem]">
      <section className=" py-[2rem] mt-2 h-[80vh] overflow-y-scroll article-scroll">
        <AllJobsList
          id={id}
          open={open}
          setId={setId}
          time={"Uploaded 2days ago"}
        />
      </section>
      <section className="py-[2rem] mt-2">
        <JobTypes />
      </section>
    </main>
  );
};
