import React from "react";
import Image from "next/image";

export const JobsHeader = () => {
  return (
    <main>
      <header className="flex items-center justify-between px-8">
        <div>
          <h2 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold text-[#4A4C58]">
            Jobs
          </h2>
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
