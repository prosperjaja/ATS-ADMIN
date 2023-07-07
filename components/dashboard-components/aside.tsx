import React from "react";
import Image from "next/image";
import { AddButton } from "../common/add-button";
import Link from "next/link";
import { link } from "fs";
import { Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AuthModal from "../modals/upload-job";
import AddJob from "../modals/upload-job";

const data = [
  {
    id: 1,
    img: "/images/Dashboard.png",
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    img: "/images/Jobs.png",
    text: "Jobs",
    link: "./jobs",
  },
  {
    id: 3,
    img: "/images/Assessments.png",
    text: "Assessment",
    link: "/assessment",
  },
  {
    id: 4,
    img: "/images/Application.png",
    text: "Application",
    link: "/application",
  },
  { id: 5, img: "/images/Media.png", text: "Media", link: "/media" },
  { id: 6, img: "/images/Course.png", text: "Course", link: "/course" },
  { id: 7, img: "/images/Cohort&admin.png", text: "Cohort", link: "/cohort" },
  {
    id: 8,
    img: "/images/Member.png",
    text: "Member management",
    link: "member-management",
  },
];

const data2 = [
  { id: 1, img: "/images/Cohort&admin.png", text: "Admin", link: "/admin" },
  { id: 2, img: "/images/logout.png", text: "Logout", link: "/logout" },
];

export const Aside = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="flex flex-col gap-8 ">
      {/* AFEX LOGO */}
      <div className=" pb-8 py-6 px-8 border-b border-[#dddddd]">
        <Image
          src={"/images/AFEX logo 1.svg"}
          alt="AFEX LOGO"
          width={100}
          height={20}
        />
      </div>
      {/* <hr className="border-1 border-[#dddddd]" /> */}
      <div className=" px-8">
        <AddButton onClick={open} text={"Upload Job"} />
      </div>
      {/* ASIDE NAVIGATIONS */}
      <div className="flex flex-col items-start gap-4  px-8">
        {data.map((item) => {
          const { id, img, text, link } = item;
          return (
            <div className="flex items-center gap-3" key={id}>
              <Image src={img} alt={text} width={20} height={20} />
              <Link href={link}>
                {" "}
                <p className="hover:text-[#E1891C] text-[1rem] text-[#4A4C58] font-semibold cursor-pointer">
                  {text}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      {/* SECOND PART OF ASIDE NAVIGATIONS */}
      <div className="flex flex-col gap-3 px-8">
        <h3 className="text-[#dddddd] font-medium">ADMIN</h3>
        {data2.map((item) => {
          const { id, img, text, link } = item;
          return (
            <div className="flex items-center gap-3" key={id}>
              <Image src={img} alt={text} width={20} height={20} />
              <Link href={link}>
                <p className="hover:text-[#E1891C] text-[1rem] text-[#4A4C58] font-semibold cursor-pointer">
                  {text}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <AddJob opened={opened} close={close} />
    </div>
  );
};
