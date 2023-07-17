import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import EditProfilePicture from "../modals/edit-profile-picture";

export const AdminDisplayProfile = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [user, setUser] = useState({ first_name: "", profile_picture: "" });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setUser(JSON.parse(localStorage.getItem("my-user")));
    }
  }, []);

  return (
    <section>
      <figure className="flex flex-col justify-center items-center gap-4">
        <div
          style={{ backgroundImage: `url('/images/Avatar.png')` }}
          className="bg-cover bg-no-repeat bg-top-center h-[clamp(10rem,21vw,20rem)] w-[clamp(10rem,21vw,20rem)] rounded-xl flex items-end justify-end"
        >
          <div
            onClick={open}
            className=" p-2 rounded-full bg-[#38CB89] -mr-[1rem] -mb-[0.5rem] cursor-pointer"
          >
            <Image
              src={"/images/Pencil.png"}
              alt="edit"
              width={22}
              height={22}
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#101828] text-[clamp(0.9rem,2vw,1.5rem)] font-semibold text-center">
            {user.first_name}
          </h3>
          <p className="text-[#38CB89] text-base font-semibold text-center">
            Admin
          </p>
        </div>
      </figure>
      <EditProfilePicture opened={opened} close={close} />
    </section>
  );
};
