import { Tabs } from "@mantine/core";
import { ApplicationTable } from "./application-table";

function ApplicationTabs() {
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

      <Tabs.Panel value="applications" pt="xs">
        <ApplicationTable />
      </Tabs.Panel>

      <Tabs.Panel value="pending" pt="xs">
        <ApplicationTable />
      </Tabs.Panel>

      <Tabs.Panel value="shortlist" pt="xs">
        <ApplicationTable />
      </Tabs.Panel>
      <Tabs.Panel value="interview" pt="xs">
        <ApplicationTable />
      </Tabs.Panel>
      <Tabs.Panel value="hired" pt="xs">
        <ApplicationTable />
      </Tabs.Panel>
      <Tabs.Panel value="rejected" pt="xs">
        <ApplicationTable />
      </Tabs.Panel>
    </Tabs>
  );
}
export default ApplicationTabs;
