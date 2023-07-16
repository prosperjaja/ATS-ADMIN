import { LoadingOverlay, Tabs } from "@mantine/core";
import { ApplicationTable } from "./application-table";
import { useState, useEffect } from "react";
import { ApplicationContdTable } from "./application-contd-table";

const url =
  "https://ats-admin-dashboard.onrender.com/api/job/application_filter?status=shortlisted";

function ApplicationTabs() {
  const [tableContent, setTableContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchParams = async (query) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const formData = new FormData();
      formData.append("days", query);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      setTableContent(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [params, setParams] = useState("shortlisted");
  console.log(params);

  useEffect(() => {
    fetchParams(params);
  }, [params]);
  return (
    <Tabs color="teal" className="border-b-3" defaultValue="applications">
      <Tabs.List>
        <Tabs.Tab value="applications">All Applications (100)</Tabs.Tab>
        <Tabs.Tab value="pending">Pending</Tabs.Tab>
        <Tabs.Tab value="shortlist">Shortlist</Tabs.Tab>
        <Tabs.Tab value="interview">Interviews</Tabs.Tab>
        <Tabs.Tab value="hired">Hired</Tabs.Tab>
        <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel
        className="px-8 h-[78vh] overflow-auto"
        value="applications"
        pt="xs"
      >
        <ApplicationTable />
      </Tabs.Panel>

      <Tabs.Panel
        className="px-8 h-[78vh] overflow-auto"
        value="pending"
        pt="xs"
      >
        <ApplicationTable />
      </Tabs.Panel>

      <Tabs.Panel
        className="px-8 h-[78vh] overflow-auto"
        onClick={() => setParams("shortlisted")}
        value="shortlist"
        pt="xs"
      >
        <ApplicationContdTable tableContent={tableContent} />
      </Tabs.Panel>
      <Tabs.Panel
        className="px-8 h-[78vh] overflow-auto"
        onClick={() => setParams("interviewed")}
        value="interview"
        pt="xs"
      >
        <ApplicationContdTable tableContent={tableContent} />
      </Tabs.Panel>
      <Tabs.Panel
        className="px-8 h-[78vh] overflow-auto"
        onClick={() => setParams("hired")}
        value="hired"
        pt="xs"
      >
        <ApplicationTable />
      </Tabs.Panel>
      <Tabs.Panel
        className="px-8 h-[78vh] overflow-auto"
        onClick={() => setParams("rejected")}
        value="rejected"
        pt="xs"
      >
        <ApplicationContdTable tableContent={tableContent} />
      </Tabs.Panel>
      <LoadingOverlay visible={loading} />
    </Tabs>
  );
}
export default ApplicationTabs;
