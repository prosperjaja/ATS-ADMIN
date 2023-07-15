import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import AdminDelete from "../modals/admin-delete";
import { useGlobalContext } from "@/pages/context";

export const FilterList = ({ adminList }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [id, setId] = useState(null);
  const { searchName } = useGlobalContext();

  useEffect(() => {
    console.log(searchName);
  }, [searchName]);

  return (
    <main className="grid grid-cols-2 gap-4 w-full overflow-auto article-scroll">
      {adminList
        ?.filter((item) => {
          return searchName.toLowerCase() === ""
            ? item
            : item.full_name.toLowerCase().includes(searchName);
        })
        ?.map((item) => {
          return (
            <section
              key={item.id}
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
                  onClick={() => {
                    setId(id);
                    console.log(id);
                    open();
                  }}
                />
              </button>
              <AdminDelete opened={opened} close={close} id={id} />
            </section>
          );
        })}
    </main>
  );
};
