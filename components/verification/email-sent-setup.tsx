import React from "react";
import Image from "next/image";
import { TextInput } from "@mantine/core";
import Link from "next/link";

export const EmailSentSetup = () => {
  return (
    <section className="h-[100vh] bg-[#393939] flex justify-center items-center ">
      <div className="bg-white w-[45rem] p-[2rem] flex flex-col gap-2 rounded-md">
        <div className="flex justify-end">
          <div className="flex justify-between items-end max-w-max">
            <Image src={"/images/close.svg"} alt="" width={14} height={14} />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <p className=" text-base">
            A link has been sent to your email, click the link to reset your
            password.
          </p>
        </div>
        <Link href={"/login"}>
          <button className="flex justify-center items-center mx-auto mt-2 bg-[#38cb89] py-[0.4rem] px-[3.9rem] rounded-md text-base font-semibold text-white">
            Close
          </button>
        </Link>
      </div>
    </section>
  );
};
