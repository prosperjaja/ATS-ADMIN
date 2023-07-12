import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    img: "/images/java.svg",
    role: "Back-end Developer",
    location: "/images/location.svg",
    choice: "Remote-Ibadan, Lagos Only",
    bcase: "/images/briefcase.svg",
    fulltime: "Full Time",
    application: "View Applications",
    assessment: "View Assessments",
    uploaded: "Uploaded 2days ago",
    pencil: "/images/green-pencil.svg",
    trash: "/images/trash.svg",
  },
  {
    id: 2,
    img: "",
    role: "Product Manager",
    location: "/images/location.svg",
    choice: "Remote-Ibadan, Lagos Only",
    bcase: "/images/briefcase.svg",
    fulltime: "Full Time",
    application: "View Applications",
    assessment: "View Assessments",
    uploaded: "Uploaded 2days ago",
    pencil: "/images/green-pencil.svg",
    trash: "/images/trash.svg",
  },
  {
    id: 3,
    img: "/images/html.svg",
    role: "FrontEnd Developer",
    location: "/images/location.svg",
    choice: "Remote-Ibadan, Lagos Only",
    bcase: "/images/briefcase.svg",
    fulltime: "Full Time",
    application: "View Applications",
    assessment: "View Assessments",
    uploaded: "Uploaded 2days ago",
    pencil: "/images/green-pencil.svg",
    trash: "/images/trash.svg",
  },
  {
    id: 4,
    img: "",
    role: "Product Manager",
    location: "/images/location.svg",
    choice: "Remote-Ibadan, Lagos Only",
    bcase: "/images/briefcase.svg",
    fulltime: "Full Time",
    application: "View Applications",
    assessment: "View Assessments",
    uploaded: "Uploaded 2days ago",
    pencil: "/images/green-pencil.svg",
    trash: "/images/trash.svg",
  },
  {
    id: 5,
    img: "/images/java.svg",
    role: "Back-end Developer",
    location: "/images/location.svg",
    choice: "Remote-Ibadan, Lagos Only",
    bcase: "/images/briefcase.svg",
    fulltime: "Full Time",
    application: "View Applications",
    assessment: "View Assessments",
    uploaded: "Uploaded 2days ago",
    pencil: "/images/green-pencil.svg",
    trash: "/images/trash.svg",
  },
  {
    id: 6,
    img: "",
    role: "Product Manager",
    location: "/images/location.svg",
    choice: "Remote-Ibadan, Lagos Only",
    bcase: "/images/briefcase.svg",
    fulltime: "Full Time",
    application: "View Applications",
    assessment: "View Assessments",
    uploaded: "Uploaded 2days ago",
    pencil: "/images/green-pencil.svg",
    trash: "/images/trash.svg",
  },
  {
    id: 7,
    img: "/images/html.svg",
    role: "FrontEnd Developer",
    location: "/images/location.svg",
    choice: "Remote-Ibadan, Lagos Only",
    bcase: "/images/briefcase.svg",
    fulltime: "Full Time",
    application: "View Applications",
    assessment: "View Assessments",
    uploaded: "Uploaded 2days ago",
    pencil: "/images/green-pencil.svg",
    trash: "/images/trash.svg",
  },
];

interface JobsListProps {
  time?: string;
  children?: React.ReactNode;
}

export const AllJobsList = ({ time, children }: JobsListProps) => {
  return (
    <main className="flex flex-col gap-4">
      {data.map((item) => {
        const {
          id,
          img,
          role,
          location,
          choice,
          fulltime,
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
                <Image src={img} alt="" width={50} height={50} />
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
                      src={location}
                      alt="location"
                      width={15}
                      height={15}
                    />
                    <p className="text-[#948E8E] text-sm">{choice}</p>
                  </div>
                  {/* briefcase div */}
                  <div className="flex items-center gap-1">
                    <Image src={bcase} alt="location" width={20} height={20} />
                    <p className="text-[#948E8E] text-sm">{fulltime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={"/application"}>
                    <p className="text-[#38CB89] text-xs underline">
                      {application}
                    </p>
                  </Link>
                  <p className="text-[#38CB89] text-xs underline">
                    {assessment}
                  </p>
                </div>
              </div>
              {/* end of the parent flexing div */}
            </article>
            <div className="flex flex-col gap-7">
              <p className="text-[#948E8E] text-sm">{time}</p>
              {children}
              <div className="flex items-center gap-5">
                <Image src={pencil} alt="edit" width={17} height={17} />
                <Image
                  className="cursor-pointer"
                  src={trash}
                  alt="remove"
                  width={17}
                  height={17}
                />
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};
