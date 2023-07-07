import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/images/Avatar.png",
    name: "Olivia Rhyne",
    role: "1st Tier Admin",
  },
  {
    id: 2,
    img: "/images/Avatar.png",
    name: "guss",
    role: "2st Tier Admin",
  },
  {
    id: 3,
    img: "/images/Avatar.png",
    name: "mike myers",
    role: "1st Tier Admin",
  },
  {
    id: 4,
    img: "/images/Avatar.png",
    name: "Joan sanders",
    role: "2st Tier Admin",
  },
  {
    id: 5,
    img: "/images/Avatar.png",
    name: "James jones",
    role: "1st Tier Admin",
  },
  {
    id: 6,
    img: "/images/Avatar.png",
    name: "scooter braun",
    role: "2st Tier Admin",
  },
];

export const FilterList = ({ search }) => {
  return (
    <main className="grid grid-cols-2 gap-4 w-full ">
      {data
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search);
        })
        .map((item) => {
          const { id, img, name, role } = item;
          return (
            <section
              key={id}
              className="flex flex-col gap-2 py-[2rem] px-[clamp(1.5rem,4vw,5rem)] bg-[#f5f5f5]"
            >
              <Image
                className="rounded-full mx-auto"
                src={img}
                alt=""
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base text-[#4A4C58] font-medium text-center">
                  {name}
                </h3>
                <p className="text-sm text-[#8F9198] font-medium text-center">
                  {role}
                </p>
              </div>
            </section>
          );
        })}
    </main>
  );
};
