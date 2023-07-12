import React from "react";
import { Aside } from "@/components/dashboard-components/aside";
import { AdminSetup } from "@/components/admin-component/admin-setup";
import { AdminHeader } from "@/components/admin-component/admin-header";

export default function Admin() {
  return (
    <main>
      <header className="grid grid-cols-[270px_1fr] h-[100vh] overflow-y-hidden">
        <aside>
          <Aside />
        </aside>
        <section className="bg-[#F5F5F5]">
          <div className="border-b border-[#dddddd] py-[1.18rem] ">
            <AdminHeader />
          </div>
          <AdminSetup />
        </section>
      </header>
    </main>
  );
}
