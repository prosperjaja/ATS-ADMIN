import React, { useState } from "react";
import { AddButton } from "../common/add-button";
import { useDisclosure } from "@mantine/hooks";
import AddJob from "../modals/upload-job";
import { JobsUpload } from "./jobs-upload";
import Link from "next/link";

export const AllJobs = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [id, setId] = useState(null);

  return (
    <header>
      <main className="flex items-center justify-between pt-[3rem] px-[2rem]">
        <section className="flex gap-4 ">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#252735] text-base font-semibold hover:border-b-4 hover:border-[#38CB89] hover:pb-2">
              <Link href={"/jobs-render"}>All Jobs</Link>
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#252735] text-base font-semibold hover:border-b-4 hover:border-[#38CB89] hover:pb-2">
              <Link href={"/drafts-render"}>Drafts</Link>
            </h3>
          </div>
        </section>
        <AddButton onClick={open} text="Post a Job" />
        <AddJob id={id} opened={opened} close={close} />
      </main>
      <div>
        <JobsUpload id={id} open={open} setId={setId} />
      </div>
    </header>
  );
};
