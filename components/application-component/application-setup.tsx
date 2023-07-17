import React from "react";
import { ApplicationHeader } from "./application-header";
import { BackToJobs } from "./back-to-jobs";
import { ApplicationTable } from "./application-table";
import ApplicationTabs from "./application-tabs";

export const ApplicationSetup = () => {
  return (
    <main>
      <section className="py-[1.18rem] border-b border-[#dddddd]">
        <ApplicationHeader />
      </section>
      <BackToJobs />
      <section>
        <ApplicationTabs />
      </section>
    </main>
  );
};
