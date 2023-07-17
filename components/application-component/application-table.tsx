import { Checkbox, Table } from "@mantine/core";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { useGlobalContext } from "@/components/common/context";

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

const url =
  "https://ats-admin-dashboard.onrender.com/api/job/job_application_list";

export const ApplicationTable = () => {
  const [totalApplicants, setTotalApplicants] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { applicantSum, setApplicantSum } = useGlobalContext();

  const ApplicantsFetch = async () => {
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
      setIsLoading(false);
      console.log(data);
      setTotalApplicants(data);
      setApplicantSum(data);
    } catch (error) {}
  };
  useEffect(() => {
    ApplicantsFetch();
  }, []);

  const rows = totalApplicants?.map((item) => (
    <tr style={{ padding: "16px" }} key={item.name} className="py-4">
      <td style={{ padding: "18px" }} className="flex items-center gap-2 py-4 ">
        <Checkbox />
        <div className="border-1 rounded-lg text-base font-medium text-[#E1891C] py-2 px-3 bg-[rgba(225,137,28,0.10)]">{`${item.applicant_name.charAt(
          0
        )}`}</div>
        {item.applicant_name}
      </td>
      <td style={{ padding: "18px" }}>{item.job_role}</td>
      <td style={{ padding: "18px" }}>{item.applicant_email}</td>
      <td style={{ padding: "18px" }}>{item.applicant_phone_number}</td>
      <td style={{ padding: "18px" }}>{item.applicant_DOB}</td>
    </tr>
  ));

  return (
    <div className=" rounded-lg bg-white">
      <Table className="h-100vh">
        <thead>
          <tr>
            <th style={{ padding: "18px" }} className="flex items-center gap-2">
              <Checkbox /> Name
            </th>
            <th style={{ padding: "18px" }}>Role</th>
            <th style={{ padding: "18px" }}>Email Address</th>
            <th style={{ padding: "18px" }}>Phone number</th>
            <th style={{ padding: "18px" }}>Date of Birth</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};
