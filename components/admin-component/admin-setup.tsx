import React, { useEffect } from "react";
import { AdminHeader } from "./admin-header";
import { ActivityUpdate } from "../dashboard-components/activity-update";
import Image from "next/image";
import { AdminDisplayProfile } from "./admin-display-profile";
import { AdminFilter } from "./admin-filter";
import { useState } from "react";

export const AdminSetup = () => {
  return (
    <main>
      <section className="p-8">
        <article className="bg-white px-6 py-[2rem] flex gap-[clamp(1.5rem,4vw,3rem)] items-start">
          <div className="w-[45%] ">
            <AdminDisplayProfile />
            {/* ADMIN ACTIVITY */}
            <article className=" bg-white px-[clamp(0.9rem,2vw,1.875rem)] py-4 h-[40vh] w-full overflow-y-scroll article-scroll">
              <h3 className="text-base font-semibold text-[#18181B]">
                Admin Activities
              </h3>
              <ActivityUpdate />
            </article>
          </div>
          <div className="w-[55%] px-[clamp(2.5rem,6vw,5rem)]">
            <section>
              <AdminFilter />
            </section>
          </div>
        </article>
      </section>
    </main>
  );
};
