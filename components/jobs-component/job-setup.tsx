import React from "react";
import { HeaderSetup } from "../dashboard-components/header-setup";
import { JobsHeader } from "./jobs-header";
import { JobsDraft } from "./jobs-draft";

export const JobSetup = () => {
  return (
    <main>
      <div className="border-b border-[#dddddd] py-[1.17rem]">
        <JobsHeader />
      </div>
      <JobsDraft />
    </main>
  );
};
