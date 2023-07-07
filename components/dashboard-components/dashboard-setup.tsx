import React from "react";
import Image from "next/image";
import { HeaderSetup } from "@/components/dashboard-components/header-setup";
import { DashboardCards } from "@/components/dashboard-components/dashboard-cards";
import { DashboardWrap } from "@/components/dashboard-components/dashboard-wrap";

export const DashboardSetup = () => {
  return (
    <section className="flex flex-col gap-2">
      <HeaderSetup
        name="Hello Alli"
        text="Take a look at today's activity"
        img="/images/Avatar.png"
      />
      <DashboardCards />
      <DashboardWrap />
    </section>
  );
};
