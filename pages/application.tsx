import React from "react";
import { Aside } from "@/components/dashboard-components/aside";

export default function Applications() {
  return (
    <main>
      <header className="grid grid-cols-[270px_1fr] py-2 h-[100vh]">
        <aside>
          <Aside />
        </aside>
        <section className="bg-[#F5F5F5]"></section>
      </header>
    </main>
  );
}
