import React from "react";
import Image from "next/image";
import { title } from "process";

const data = [
  {
    id: 1,
    img: "/images/greencase.svg",
    title: "New Job Post",
    text: " Admin 22",
    time: "12m ago",
  },
  {
    id: 2,
    img: "/images/purple-file.svg",
    title: "New Article Posted",
    text: " Admin 22",
    time: "12m ago",
  },
  {
    id: 3,
    img: "/images/orangefile.svg",
    title: "Assessment Posted",
    text: " Admin 22",
    time: "12m ago",
  },
  {
    id: 4,
    img: "/images/purple-file.svg",
    title: "New Article Posted",
    text: " Admin 22",
    time: "12m ago",
  },
  {
    id: 5,
    img: "/images/greencase.svg",
    title: "New Job Post",
    text: " Admin 22",
    time: "12m ago",
  },
  {
    id: 6,
    img: "/images/orangefile.svg",
    title: "Assessment Posted",
    text: " Admin 22",
    time: "12m ago",
  },
];

export const ActivityUpdate = ({ activity }) => {
  return (
    <section>
      {activity?.map((item) => {
        return (
          <ul key={item.id} className="rounded-xl pt-6">
            <li className="flex items-end justify-between gap-[clamp(0.5rem,1.2vw,1rem)] border-b border-[#dddddd] pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/greencase.svg"}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.data}</h3>
                  <p className="text-base text-[#5E606A]">
                    By{" "}
                    <span className="underline text-[#5E606A]">
                      {item.actor}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-base text-[#5E606A]">{item.get_timesince}</p>
            </li>
          </ul>
        );
      })}
    </section>
  );
};
