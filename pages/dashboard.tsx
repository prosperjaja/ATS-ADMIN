import React from "react";
import Image from "next/image";
import { Aside } from "@/components/dashboard-components/aside";
import { DashboardSetup } from "../components/dashboard-components/dashboard-setup";
import withAuth from "./protect";

export const Dashboard = () => {
  return (
    <main>
      <header className="grid grid-cols-[270px_1fr] h-[100vh] overflow-y-hidden">
        <aside className="sticky">
          <Aside />
        </aside>
        <section className="bg-[#F5F5F5] p-4 ">
          <DashboardSetup />
        </section>
      </header>
    </main>
  );
};

export default withAuth(Dashboard);
