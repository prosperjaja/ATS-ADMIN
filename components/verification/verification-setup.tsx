import { TextInput } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const VerificationSetup = () => {
  return (
    <section className="h-[100vh] bg-[#393939] flex justify-center items-center ">
      <div className="bg-white w-[28rem] p-[2rem] flex flex-col gap-2 rounded-md">
        <div className="flex justify-end">
          <div className="flex justify-between items-end max-w-max">
            <Image src={"/images/close.svg"} alt="" width={14} height={14} />
          </div>
        </div>
        <h3>Password Reset</h3>
        <div className="flex flex-col gap-2 pt-2">
          <p className="font-medium text-sm">Please enter your email</p>
          <TextInput placeholder="email@gmail.com" />
        </div>
        <Link href={"/email-sent"}>
          <button className="flex justify-center items-center mx-auto mt-2 bg-[#38cb89] py-[0.4rem] px-[3.9rem] rounded-md text-base font-semibold text-white">
            Submit
          </button>
        </Link>
      </div>
    </section>
  );
};
