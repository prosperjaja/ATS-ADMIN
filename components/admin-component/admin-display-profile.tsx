import React from "react";
import Image from "next/image";

export const AdminDisplayProfile = () => {
  return (
    <section>
      <figure className="flex flex-col justify-center items-center gap-4">
        <div
          style={{ backgroundImage: `url('/images/Avatar.png')` }}
          className="bg-cover bg-no-repeat bg-top-center h-[clamp(10rem,21vw,20rem)] w-[clamp(10rem,21vw,20rem)] rounded-xl flex items-end justify-end"
        >
          <div className=" p-2 rounded-full bg-[#38CB89] -mr-[1rem] -mb-[0.5rem]">
            <Image
              src={"/images/Pencil.png"}
              alt="edit"
              width={22}
              height={22}
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#101828] text-[clamp(0.9rem,2vw,1.5rem)] font-semibold text-center">
            Olivia Rhyne
          </h3>
          <p className="text-[#38CB89] text-base font-semibold text-center">
            Admin
          </p>
        </div>
      </figure>
    </section>
  );
};
