import React from "react";
import { AddButton } from "../common/add-button";
import { useDisclosure } from "@mantine/hooks";
import AddJob from "../modals/upload-job";

export const JobsDraft = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <main className="flex items-center justify-between pt-[3rem] px-[2rem]">
      <section className="flex gap-4 ">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#252735] text-base font-semibold hover:border-b-4 hover:border-[#38CB89] hover:pb-2">
            All Jobs
          </h3>
          {/* <hr className="bg-[#38CB89] border-2 border-[#38CB89] w-[1rem] flex justify-center items-center mx-auto" /> */}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#252735] text-base font-semibold hover:border-b-4 hover:border-[#38CB89] hover:pb-2">
            Drafts
          </h3>
          {/* <hr className="bg-[#38CB89] border-2 border-[#38CB89] " /> */}
        </div>
      </section>
      <AddButton onClick={open} text="Post a Job" />
      <AddJob opened={opened} close={close} />
    </main>
  );
};
