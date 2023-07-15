import React from "react";
import Image from "next/image";

// const data = [
//   {
//     id: 1,
//     role: "FrontEnd Developer",
//     admin: "Admin 22",
//     view: "/images/eye.svg",
//     number: "123",
//     dots: "/images/dots-horizontal.svg",
//     time: "2d ago",
//   },
//   {
//     id: 2,
//     role: "FrontEnd Developer",
//     admin: "Admin 22",
//     view: "/images/eye.svg",
//     number: "123",
//     dots: "/images/dots-horizontal.svg",
//     time: "2d ago",
//   },
//   {
//     id: 3,
//     role: "FrontEnd Developer",
//     admin: "Admin 22",
//     view: "/images/eye.svg",
//     number: "123",
//     dots: "/images/dots-horizontal.svg",
//     time: "2d ago",
//   },
//   {
//     id: 4,
//     role: "FrontEnd Developer",
//     admin: "Admin 22",
//     view: "/images/eye.svg",
//     number: "123",
//     dots: "/images/dots-horizontal.svg",
//     time: "2d ago",
//   },
//   {
//     id: 5,
//     role: "FrontEnd Developer",
//     admin: "Admin 22",
//     view: "/images/eye.svg",
//     number: "123",
//     dots: "/images/dots-horizontal.svg",
//     time: "2d ago",
//   },
// ];

export const JobListMap = ({ timeFrame }) => {
  return (
    <section className=" px-2 flex flex-col gap-4">
      {timeFrame?.map((item) => {
        // const { id, role, admin, view, number, dots, time } = item;
        return (
          <section
            key={item.id}
            className="flex items-center border-b border-[#dddddd] pb-3 justify-between"
          >
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-base font-semibold">{item.role}</h3>
              <p className="text-[#5E606A]">
                Posted By <span>{item.posted_by}</span>
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/eye.svg"}
                  alt="watch"
                  width={20}
                  height={20}
                />
                <span className="text-[#5E606A]">{item.no_of_views}</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 ">
              <Image
                src={"/images/dots-horizontal.svg"}
                className="flex justify-self-end"
                alt="options"
                width={30}
                height={30}
              />
              <p className="text-[#5E606A] text-sm">
                {item.time_since_creation}
              </p>
            </div>
          </section>
        );
      })}
    </section>
  );
};
