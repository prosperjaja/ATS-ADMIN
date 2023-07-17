import React from "react";
import { HeaderSetup } from "../dashboard-components/header-setup";
import { JobsHeader } from "./jobs-header";
import { AllJobs } from "./all-jobs";
import { JobsUpload } from "./jobs-upload";
import JobTabs from "./job-tabs";

export const JobSetup = () => {
  return (
    <main>
      <div className="border-b border-[#dddddd] py-[1.17rem]">
        <JobsHeader />
      </div>
      <JobTabs />
    </main>
  );
};
