import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export const FilterList = ({ search, adminList }) => {
  return (
    <main className="grid grid-cols-2 gap-4 w-full h-[70vh] overflow-y-scroll article-scroll">
      {adminList
        ?.filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.full_name.toLowerCase().includes(search);
        })
        .map((item) => {
          // const { detail-url, email, fullname, image_URL, permission_level, position } = item;
          return (
            <section
              key={item.full_name}
              className="flex flex-col gap-2 py-[2rem] px-[clamp(1.5rem,4vw,5rem)] bg-[#f5f5f5]"
            >
              <Image
                className="rounded-full mx-auto"
                src={""}
                alt=""
                width={100}
                height={100}
              />
              <div className="text-center">
                <h2>{item.full_name}</h2>
                <h3 className="text-base text-[#4A4C58] font-medium text-center">
                  {item.position}
                </h3>
                <p className="text-sm text-[#8F9198] font-medium text-center">
                  {item.permission_level[0].name}
                </p>
              </div>
              <button className="flex justify-center items-center mt-2">
                <Image
                  src={"/images/trash.svg"}
                  alt="remove"
                  width={20}
                  height={20}
                />
              </button>
            </section>
          );
        })}
    </main>
  );
};
