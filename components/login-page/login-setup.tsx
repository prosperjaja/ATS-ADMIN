import React from "react";
import Image from "next/image";
import { TextInput, PasswordInput, Checkbox, Button } from "@mantine/core";
import Link from "next/link";

export const LoginSetUp = () => {
  return (
    <main>
      <section className="bg-[#e5e5e5] flex flex-col gap-3 justify-center items-center h-[100vh]">
        <Image src={"/images/AFEX logo 1.svg"} alt="" width={130} height={40} />
        <article className="flex flex-col items-center justify-center gap-2 w-[30rem] py-[2rem] px-[clamp(1rem,3vw,2rem)] bg-white rounded-xl shadow-xl shadow-[0px 51.8664px 76.6208px rgba(193, 194, 198, 0.19)]">
          <div className="flex flex-col gap-2 w-full pt-3">
            <h3 className="font-medium">Sign in to ATS Admin</h3>
            <p className="font-medium">
              Email <sup className="text-red-600">*</sup>
            </p>
            <TextInput placeholder="email.com" />
            <p className="font-medium">
              Password <sup className="text-red-600">*</sup>
            </p>
            <PasswordInput />
            <div className="flex items-center gap-3">
              <Checkbox />
              <span className="font-medium">Remember me</span>
            </div>
            <Button className="bg-[#38cb89]">Sign In</Button>
            <div className="text-red-600 flex justify-end mt-2">
              <Link href={"/verify"}>
                <h3> Forgot password ?</h3>{" "}
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
