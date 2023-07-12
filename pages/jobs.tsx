import React from "react";
import { Aside } from "@/components/dashboard-components/aside";
import { JobSetup } from "@/components/jobs-component/job-setup";
import withAuth from "./protect";

export function Jobs() {
  return (
    <main>
      <header className="grid grid-cols-[270px_1fr]  h-[100vh]">
        <aside>
          <Aside />
        </aside>
        <section className="bg-[#F5F5F5]">
          <JobSetup />
        </section>
      </header>
    </main>
  );
}

export default withAuth(Jobs);
