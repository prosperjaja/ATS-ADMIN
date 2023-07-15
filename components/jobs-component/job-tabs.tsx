import { LoadingOverlay, Tabs } from "@mantine/core";
import { AllJobsList } from "./all-jobs-list";
import { JobTypes } from "./job-types";
import { JobsHeader } from "./jobs-header";
import { AddButton } from "../common/add-button";
import { useDisclosure } from "@mantine/hooks";
import AddJob from "../modals/upload-job";
import { UploadButton } from "../common/upload-button";
import { useEffect, useState } from "react";
// import {
//   IconPhoto,
//   IconMessageCircle,
//   IconSettings,
// } from "@tabler/icons-react";

const url = "https://ats-admin-dashboard.onrender.com/api/job/job_list_create";

function JobTabs() {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);
  const [jobListings, setJobListings] = useState(null);
  const [id, setId] = useState(null);

  const jobListingsFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      setJobListings(data.results);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    jobListingsFetch();
  }, []);

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
              <AllJobsList
                setId={setId}
                open={open}
                time={"Uploaded 2days ago"}
                jobListings={jobListings}
                id={id}
              />
            </section>
            <section className="py-[2rem] mt-2">
              <JobTypes />
            </section>
          </main>
        </Tabs.Panel>

        <Tabs.Panel value="Draft" pt="xs">
          <main className="grid grid-cols-[1fr_clamp(13rem,29vw,28.5rem)] gap-4 px-[2rem]">
            <section className=" py-[2rem] mt-2 h-[80vh] overflow-y-scroll article-scroll">
              <AllJobsList jobListings={jobListings} id={id}>
                <UploadButton />
              </AllJobsList>
            </section>
            <section className="py-[2rem] mt-2">
              <JobTypes />
            </section>
          </main>
        </Tabs.Panel>
      </Tabs>
      <AddJob opened={opened} id={id} close={close} />
      <LoadingOverlay visible={isLoading} />
    </section>
  );
}

export default JobTabs;
