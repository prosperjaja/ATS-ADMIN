import React from "react";
import Image from "next/image";
import { useGlobalContext } from "@/components/common/context";
import NotificationPop from "../modals/notification-pop";

export const AdminHeader = () => {
  const { notifyNumber } = useGlobalContext();

  return (
    <main>
      <header className="flex items-center justify-between px-8">
        <div>
          <h2 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold text-[#4A4C58]">
            Admin
          </h2>
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
              src={"/images/Avatar.png"}
              alt="avatar"
              width={50}
              height={50}
              className="rounded-xl"
            />
          </div>
        </div>
      </header>
    </main>
  );
};
