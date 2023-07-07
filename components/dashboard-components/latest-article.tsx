import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/images/phone.png",
    title: "How to apply for job interviews remotely",
    text: "Admin 22",
    highlight: "NEWS",
    time: "2d ago",
  },
  {
    id: 2,
    img: "/images/phone.png",
    title: "How to apply for job interviews remotely",
    text: "Admin 22",
    highlight: "GENERAL",
    time: "2d ago",
  },
  {
    id: 3,
    img: "/images/phone.png",
    title: "How to apply for job interviews remotely",
    text: "Admin 22",
    highlight: "NEWS",
    time: "2d ago",
  },
  {
    id: 4,
    img: "/images/phone.png",
    title: "How to apply for job interviews remotely",
    text: "Admin 22",
    highlight: "GENERAL",
    time: "2d ago",
  },
];

export const LatestArticle = () => {
  return (
    <main className="flex flex-col gap-8 pt-4">
      {data.map((item) => {
        const { id, img, title, text, highlight, time } = item;
        return (
          <section
            key={id}
            className="flex items-center justify-between gap-4 border-b border-[#dddddd] pb-4"
          >
            <div className="flex items-center gap-6">
              <Image
                className="rounded-lg"
                src={img}
                alt={highlight}
                width={80}
                height={80}
              />
              <div className="flex flex-col">
                <h3 className="text-[#252735] text-base font-bold max-w-[15.18rem]">
                  {title}
                </h3>
                <p className="text-base text-[#5E606A]">{text}</p>
                <div className="bg-[#DCFCE7] py-[5px] px-[1rem] rounded-2xl max-w-max flex items-center gap-4">
                  <Image
                    src={"/images/Ellipse 8.svg"}
                    alt="."
                    width={5}
                    height={5}
                  />
                  <p className="text-[#14532D] text-sm font-semibold">
                    {highlight}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-10">
              <Image
                src={"/images/dots-horizontal.svg"}
                alt="..."
                width={30}
                height={30}
              />
              <p className="text-[#8F9198] text-sm">{time}</p>
            </div>
          </section>
        );
      })}
    </main>
  );
};
