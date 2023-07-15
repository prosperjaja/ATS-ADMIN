import React from "react";
import Image from "next/image";
import { AddButton } from "../common/add-button";
import Link from "next/link";
// import { link } from "fs";
import { Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AuthModal from "../modals/upload-job";
import AddJob from "../modals/upload-job";

import {
  Briefcase,
  FolderOpen,
  Home3,
  LogoutCurve,
  Note,
  Notepad2,
  People,
  Teacher,
  UserEdit,
} from "iconsax-react";
import { useRouter } from "next/router";
import clsx from "clsx";

export const Aside = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { pathname, push } = useRouter();

  const data = [
    {
      id: 1,
      img: (
        <Home3
          size="20"
          color="#E1891C"
          variant={pathname.includes("dashboard") ? "Bold" : "Outline"}
        />
      ),
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      img: (
        <Briefcase
          size="20"
          variant={pathname.includes("Briefcase") ? "Bold" : "Outline"}
        />
      ),
      text: "Jobs",
      link: "./jobs",
    },
    {
      id: 3,
      img: (
        <Notepad2
          size="20"
          variant={pathname.includes("Assessment") ? "Bold" : "Outline"}
        />
      ),
      text: "Assessment",
      link: "#",
    },
    {
      id: 4,
      img: (
        <Note
          size="20"
          variant={pathname.includes("Application") ? "Bold" : "Outline"}
        />
      ),
      text: "Application",
      link: "/application",
    },
    {
      id: 5,
      img: (
        <FolderOpen
          size="20"
          variant={pathname.includes("Media") ? "Bold" : "Outline"}
        />
      ),
      text: "Media",
      link: "#",
    },
    {
      id: 6,
      img: (
        <Teacher
          size="20"
          variant={pathname.includes("Course") ? "Bold" : "Outline"}
        />
      ),
      text: "Course",
      link: "#",
    },
    {
      id: 7,
      img: (
        <People
          size="20"
          variant={pathname.includes("Cohort") ? "Bold" : "Outline"}
        />
      ),
      text: "Cohort",
      link: "#",
    },
    {
      id: 8,
      img: (
        <UserEdit
          size="20"
          variant={pathname.includes("Member management") ? "Bold" : "Outline"}
        />
      ),
      text: "Member management",
      link: "#",
    },
  ];

  const data2 = [
    {
      id: 1,
      img: (
        <People
          size="20"
          variant={pathname.includes("Admin") ? "Bold" : "Outline"}
        />
      ),
      text: "Admin",
      link: "/admin",
    },
    {
      id: 2,
      img: (
        <LogoutCurve
          size="20"
          variant={pathname.includes("Logout") ? "Bold" : "Outline"}
        />
      ),
      text: "Logout",
      action: () => {
        localStorage.removeItem("my-user");
        push("/login");
      },
    },
  ];

  const data3 = [
    {
      id: 2,
      img: (
        <LogoutCurve
          size="20"
          variant={pathname.includes("Logout") ? "Bold" : "Outline"}
        />
      ),
      text: "Logout",
      action: () => {
        localStorage.removeItem("my-user");
        push("/login");
      },
    },
  ];

  const user = JSON.parse(localStorage.getItem("my-user"));
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
              <Link href={item.link}>
                <div
                  key={text}
                  className={clsx(
                    pathname.includes(link)
                      ? "text-[#E1891C]"
                      : "text-[#4A4C58]",
                    "flex gap-3 items-center"
                  )}
                >
                  <div className=""> {img} </div>
                  <h2 className=" hover:text-[#E1891C] text-[1rem] text-[#4A4C58] font-semibold cursor-pointer">
                    {text}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* SECOND PART OF ASIDE NAVIGATIONS */}

      <div className="flex flex-col gap-3 px-8">
        <h3 className="text-[#dddddd] font-medium">ADMIN</h3>
        {user.role === "is_superadmin"
          ? data2.map((item) => {
              const { id, img, text, action, link } = item;
              return (
                <div className="flex items-center gap-3" key={id}>
                  {/* <Image src={img} alt={text} width={20} height={20} /> */}
                  {link ? (
                    <Link
                      href={link}
                      className={clsx(
                        pathname.includes(link)
                          ? "text-[#E1891C]"
                          : "text-[#4A4C58]",
                        "flex gap-3 items-center"
                      )}
                    >
                      {img}
                      <p className="hover:text-[#E1891C] text-[1rem] text-[#4A4C58] font-semibold cursor-pointer">
                        {text}
                      </p>
                    </Link>
                  ) : (
                    <div
                      onClick={action}
                      className={clsx(
                        pathname.includes(link)
                          ? "text-[#E1891C]"
                          : "text-[#4A4C58]",
                        "flex gap-3 items-center"
                      )}
                    >
                      {img}
                      <p className="hover:text-[#E1891C] text-[1rem] text-[#4A4C58] font-semibold cursor-pointer">
                        {text}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          : data3.map((item) => {
              const { id, img, text, action } = item;
              return (
                <div className="flex items-center gap-3" key={id}>
                  <div onClick={action} className="text-[#E1891C]">
                    {img}
                    <p className="hover:text-[#E1891C] text-[1rem] text-[#4A4C58] font-semibold cursor-pointer">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>
      <AddJob opened={opened} close={close} />
    </div>
  );
};
