import React, { useState, useEffect } from "react";
import { AddButton } from "../common/add-button";
import Image from "next/image";
import { FilterList } from "./filter-list";
import { useDisclosure } from "@mantine/hooks";
import AddAdmin from "../modals/add-admin";
import { createContext } from "react";
import { useGlobalContext } from "@/components/common/context";

interface AdminContext {
  id: number;
  name: string;
}

export const AdminFilter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [adminList, setAdminList] = useState();
  const AdminContext = createContext<AdminContext | undefined>(undefined);
  const { searchName, setSearchName, adminCreated, setAdminCount } =
    useGlobalContext();

  const url =
    "https://ats-admin-dashboard.onrender.com/api/ats_admin/sub_admin_list";

  const adminListFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setIsLoading(false);
      setAdminList(data.results);
      setAdminCount(data.results.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    adminListFetch();
  }, [adminCreated]);
  console.log(adminList);

  return (
    <AdminContext.Provider value={adminList}>
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
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="outline-none border-none bg-[#F5F5F6] flex-1"
            type="text"
            placeholder="Search admin by name"
          />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center pt-[15rem]">
            <h1 className="text-gray-400 text-3xl font-semibold">
              Please hold on...
            </h1>
          </div>
        ) : null}
        <article className="flex justify-center items-center">
          <FilterList adminList={adminList} />
        </article>
        <AddAdmin opened={opened} close={close} />
      </main>
    </AdminContext.Provider>
  );
};
