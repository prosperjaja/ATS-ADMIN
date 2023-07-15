import { Checkbox, Table } from "@mantine/core";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

export const ApplicationContdTable = ({ tableContent }) => {
  const rows = tableContent?.map((item) => (
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
