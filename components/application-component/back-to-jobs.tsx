import React from "react";
import Image from "next/image";
import { AddButton } from "../common/add-button";
import Link from "next/link";

export const BackToJobs = () => {
  return (
    <main className="flex items-center justify-between p-6 ">
      <Link href={"/jobs"}>
        <div className="flex items-center gap-3 hover:border hover:border-[#DBD9D9] hover:py-2 hover:px-2 rounded-lg cursor-pointer">
          <Image
            src={"/images/arrow-left.svg"}
            alt="<"
            width={17}
            height={17}
          />
          <p className="text-[#252735] font-semibold text-sm">Back to Jobs</p>
        </div>
      </Link>
      <section className="flex items-center gap-4">
        <div className="flex items-center gap-3 border border-[#DBD9D9] px-[3rem] py-2 rounded-lg">
          <Image src={"/images/import.svg"} alt="" width={17} height={17} />
          <p className="text-[13px] font-bold text-[#514747]">Export</p>
        </div>
        <AddButton text="Shortlist Candidates" />
      </section>
    </main>
  );
};
