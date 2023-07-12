import { Tabs } from "@mantine/core";
import { AllJobsList } from "./all-jobs-list";
import { JobTypes } from "./job-types";
import { JobsHeader } from "./jobs-header";
import { AddButton } from "../common/add-button";
import { useDisclosure } from "@mantine/hooks";
import AddJob from "../modals/upload-job";
import { UploadButton } from "../common/upload-button";
// import {
//   IconPhoto,
//   IconMessageCircle,
//   IconSettings,
// } from "@tabler/icons-react";

function JobTabs() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <section className="py-5">
      <Tabs color="teal" defaultValue="All Jobs">
        <section className="flex items-center justify-between px-7">
          <Tabs.List>
            <Tabs.Tab value="All Jobs">All Jobs</Tabs.Tab>
            <Tabs.Tab value="Draft">Draft</Tabs.Tab>
          </Tabs.List>
          <AddButton onClick={open} text="Post a Job" />
        </section>

        <Tabs.Panel value="All Jobs" pt="xs">
          <main className="grid grid-cols-[1fr_clamp(13rem,29vw,28.5rem)] gap-4 px-[2rem]">
            <section className=" py-[2rem] mt-2 h-[80vh] overflow-y-scroll article-scroll">
              <AllJobsList time={"Uploaded 2days ago"} />
            </section>
            <section className="py-[2rem] mt-2">
              <JobTypes />
            </section>
          </main>
        </Tabs.Panel>

        <Tabs.Panel value="Draft" pt="xs">
          <main className="grid grid-cols-[1fr_clamp(13rem,29vw,28.5rem)] gap-4 px-[2rem]">
            <section className=" py-[2rem] mt-2 h-[80vh] overflow-y-scroll article-scroll">
              <AllJobsList children={<UploadButton />} />
            </section>
            <section className="py-[2rem] mt-2">
              <JobTypes />
            </section>
          </main>
        </Tabs.Panel>
      </Tabs>
      <AddJob opened={opened} close={close} />
    </section>
  );
}

export default JobTabs;
