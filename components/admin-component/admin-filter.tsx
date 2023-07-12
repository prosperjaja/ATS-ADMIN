import React, { useState, useEffect } from "react";
import { AddButton } from "../common/add-button";
import Image from "next/image";
import { FilterList } from "./filter-list";
import { useDisclosure } from "@mantine/hooks";
import AddAdmin from "../modals/add-admin";

export const AdminFilter = () => {
  const [search, setSearch] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [adminList, setAdminList] = useState();

  const url =
    "https://ats-admin-dashboard.onrender.com/api/ats_admin/sub_admin_list";

  const adminListFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setAdminList(data.results);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    adminListFetch();
  }, []);
  console.log(adminList);

  return (
    <main className="flex flex-col gap-4">
      <section className="flex justify-between">
        <h3 className="text-[1.1rem] font-bold text-[#4A4C58]">Sub Admin</h3>
        <AddButton onClick={open} text={"Add admin"} />
      </section>
      <div className="text-[#8F9198] font-medium text-sm py-3 bg-[#F5F5F6] border border-[#DADADD] outline-none rounded-lg px-4 w-full flex items-center gap-4 ">
        <Image
          src={"/images/akar-icons_search.svg"}
          alt=""
          width={20}
          height={20}
        />
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none border-none bg-[#F5F5F6] flex-1"
          type="text"
          placeholder="Search admin by name"
        />
      </div>
      <article className="flex justify-center items-center">
        <FilterList search={search} adminList={adminList} />
      </article>
      <AddAdmin opened={opened} close={close} />
    </main>
  );
};
