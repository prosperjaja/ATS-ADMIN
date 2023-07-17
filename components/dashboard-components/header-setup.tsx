import React from "react";
import Image from "next/image";
import { Head } from "../common/head";
import { useDisclosure } from "@mantine/hooks";
import Notification from "../modals/job-particular";
import NotificationPop from "../modals/notification-pop";
import { useGlobalContext } from "@/components/common/context";
import FilterPopover from "../modals/filter-popover";

export const HeaderSetup = ({
  name,
  text,
  img,
}: {
  name: string;
  text?: string;
  img?: string;
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { notifyNumber } = useGlobalContext();

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
            <div className="cursor-pointer relative">
              <h2 className="text-white rounded-full px-2 py-1 font-bold bg-red-600 absolute text-[12px] left-4 top-[-7px]">
                {notifyNumber.length}
              </h2>
              <NotificationPop />
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
          <FilterPopover />
          <p className="text-[#948E8E] text-[0.9rem]">
            -Displaying logs for Cycle 2
          </p>
        </div>
      </section>
    </div>
  );
};
