import React from "react";
import Image from "next/image";
import { Head } from "../common/head";

export const HeaderSetup = ({
  name,
  text,
  img,
}: {
  name: string;
  text?: string;
  img?: string;
}) => {
  return (
    <div>
      <section>
        {/* <Head name="Hello Alli" text="Take a look at today's activity" /> */}
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold text-[#4A4C58]">
              {name}
            </h2>
            <p className="text-[#948E8E] text-sm font-medium pt-[0.5rem]">
              {text}
            </p>
          </div>
          {/* NOTIFICATION AND AVATAR */}
          <div className="flex items-center gap-6">
            <div>
              <Image
                src={"/images/notification.png"}
                alt="notification"
                width={25}
                height={25}
              />
            </div>
            <div>
              <Image
                src={img}
                alt=""
                width={50}
                height={50}
                className="rounded-xl"
              />
            </div>
          </div>
        </header>
        <div className="flex items-center gap-2 pt-7">
          <button className="flex items-center border border-[#dddddd] px-3 py-1 rounded-md gap-2">
            <Image
              src={"/images/Filter.png"}
              alt="Filter"
              width={20}
              height={20}
            />
            <span className="text-[0.9rem] text-[#252C32]">Filter Cycle</span>
          </button>
          <p className="text-[#948E8E] text-[0.9rem]">
            -Displaying logs for Cycle 2
          </p>
        </div>
      </section>
    </div>
  );
};
