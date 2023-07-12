import { Checkbox } from "@mantine/core";
import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 2,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 3,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 4,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 5,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 6,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 7,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 8,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 9,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 10,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 11,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 12,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 13,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 14,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
  {
    id: 15,
    name: "Phoenix Baker",
    role: "Product Manager",
    email: "phoenix@gmail.com",
    phone: +23490456373,
    dob: 9 / 7 / 2023,
    actions: "Actions",
  },
];

export const ApplicationTable = () => {
  return (
    <main className="px-6 rounded-lg ">
      <article className="bg-[#F9FAFB] py-2 px-6 flex items-start justify-between rounded-t-lg">
        <div className="flex items-center gap-2">
          <Checkbox />
          <p>Name</p>
        </div>
        <div>
          <p>Role</p>
          {/* <Image src={'/'}/> */}
        </div>
        <div>Email address</div>
        <div>Phone Number</div>
        <div>Date of Birth</div>
      </article>
      <section className="bg-white px-6 h-[70vh] overflow-y-scroll article-scroll">
        <article className="flex flex-col gap-3">
          {data.map((item) => {
            const { id, name, role, email, phone, dob, actions } = item;
            return (
              <section
                key={id}
                className="bg-white flex items-center justify-between border-b border-[#F5F5F5] pb-3"
              >
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <p className="bg-[rgba(225,137,28,0.10)] text-[#E1891C] p-2 rounded-lg">
                    PB
                  </p>
                  <p>{name}</p>
                </div>
                <div>{role}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{dob}</div>
                <div>{actions}</div>
              </section>
            );
          })}
        </article>
      </section>
    </main>
  );
};
