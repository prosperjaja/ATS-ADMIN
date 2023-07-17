import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, MantineProvider, Text } from "@mantine/core";
import { ModalsProvider, modals } from "@mantine/modals";
import { useDisclosure } from "@mantine/hooks";
import Delete from "../modals/delete";

interface JobsListProps {
  time?: string;
  children?: React.ReactNode;
  jobListings?: any[];
  open?: () => void;
  setId?: React.Dispatch<React.SetStateAction<any>>;
  id;
}

export const AllJobsList = ({
  jobListings,
  time,
  children,
  open,
  setId,
  id,
}: JobsListProps) => {
  const [opened, { open: openModal, close }] = useDisclosure(false);

  return (
    <MantineProvider>
      <ModalsProvider>
        <main className="flex flex-col gap-4">
          {jobListings?.map((item) => {
            const {
              id,
              img,
              role,
              location,
              choice,
              job_schedule,
              job_type,
              uploaded_time,
              application,
              assessment,
              uploaded,
              pencil,
              trash,
              bcase,
            } = item;
            return (
              <div
                key={id}
                className="bg-white rounded-xl py-[clamp(0.8rem,2vw,1.5rem)] px-4 flex items-center justify-between"
              >
                <article className=" flex items-center gap-[clamp(0.8rem,2vw,1.5rem)]">
                  {/* animated image */}
                  <div className="w-[clamp(2.5rem,6vw,5.25rem)] h-[clamp(2.5rem,6vw,5.25rem)] bg-[rgba(56,203,137,0.10)] rounded-2xl flex justify-center items-center">
                    <Image
                      src={"/images/html.svg"}
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* parent flexing the briefcase and location and applicants div */}
                  <div className="flex flex-col gap-2">
                    {/* role */}
                    <h3 className="text-[1.1rem] text-[#252735] font-semibold">
                      {role}
                    </h3>
                    <div className="flex items-center gap-1">
                      {/* location div */}
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/images/location.svg"}
                          alt="location"
                          width={15}
                          height={15}
                        />
                        <p className="text-[#948E8E] text-sm">{location}</p>
                      </div>
                      {/* briefcase div */}
                      <div className="flex items-center gap-1">
                        <Image
                          src={"/images/briefcase.svg"}
                          alt="location"
                          width={20}
                          height={20}
                        />
                        <p className="text-[#948E8E] text-sm">{job_schedule}</p>
                        <p className="text-[#948E8E] text-sm">{job_type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={"/application"}>
                        <p className="text-[#38CB89] text-xs underline">
                          View application
                        </p>
                      </Link>
                      <p className="text-[#38CB89] text-xs underline">
                        View Assessments
                      </p>
                    </div>
                  </div>
                  {/* end of the parent flexing div */}
                </article>
                <div className="flex flex-col gap-7">
                  <p className="text-[#948E8E] text-sm">
                    Uploaded {uploaded_time}
                  </p>
                  {children}
                  <div className="flex items-center gap-5">
                    <Image
                      onClick={() => {
                        setId(id);
                        open();
                      }}
                      src={"/images/green-pencil.svg"}
                      alt="edit"
                      width={17}
                      height={17}
                      className="cursor-pointer"
                    />
                    <Image
                      onClick={() => {
                        setId(id);
                        openModal();
                      }}
                      className="cursor-pointer"
                      src={"/images/trash.svg"}
                      alt="remove"
                      width={17}
                      height={17}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <Delete id={id} opened={opened} close={close} />
        </main>
      </ModalsProvider>
    </MantineProvider>
  );
};
