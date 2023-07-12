import React from "react";
import Image from "next/image";
import { HeaderSetup } from "@/components/dashboard-components/header-setup";
import { DashboardCards } from "@/components/dashboard-components/dashboard-cards";
import { DashboardWrap } from "@/components/dashboard-components/dashboard-wrap";
import { useState, useEffect } from "react";

export const DashboardSetup = () => {
  const [user, setUser] = useState({ first_name: "" });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setUser(JSON.parse(localStorage.getItem("my-user")));
    }
  }, []);

  // console.log(user);
  return (
    <section className="flex flex-col gap-2">
      <HeaderSetup
        name={`Hello ${user.first_name}`}
        text="Take a look at today's activity"
        img="/images/Avatar.png"
      />
      <div>
        <DashboardCards />
        <DashboardWrap />
      </div>
    </section>
  );
};
