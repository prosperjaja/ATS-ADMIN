import React from "react";
import { Aside } from "@/components/dashboard-components/aside";
import { ApplicationSetup } from "@/components/application-component/application-setup";

export default function Applications() {
  return (
    <main>
      <header className="grid grid-cols-[270px_1fr] h-[100vh]">
        <aside>
          <Aside />
        </aside>
        <section className="bg-[#F5F5F5]">
          <ApplicationSetup />
        </section>
      </header>
    </main>
  );
}
