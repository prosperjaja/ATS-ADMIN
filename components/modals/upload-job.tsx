import React, { useEffect } from "react";
import {
  Modal,
  Group,
  Button,
  TextInput,
  Select,
  MultiSelect,
} from "@mantine/core";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface ModalType {
  opened: boolean;
  close: () => void;
  id?: number;
}

const initialValue = {
  role: "",
  job_type: "",
  skill_level: "",
  location: [],
  job_requirements: "",
  job_schedule: "",
};

const locationUrl =
  "https://ats-admin-dashboard.onrender.com/api/job/location_list";
const url = "https://ats-admin-dashboard.onrender.com/api/job/job_list_create";

export default function AddJob({ opened, close, id }: ModalType) {
  const [addJob, setAddjob] = useState(initialValue);
  const [newLocation, setNewLocation] = useState(null);
  const editUrl = `https://ats-admin-dashboard.onrender.com/api/job/${id}/job_detail_update`;

  //endpoint fetch for location input in create/post job modal
  const locationFetch = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(locationUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setNewLocation(
        data.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };
  //endpoint fetch for jobdetails input in create/post job modal
  const jobDetails = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const res = await fetch(
        `https://ats-admin-dashboard.onrender.com/api/job/${id}/job_detail_update`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      const {
        role,
        job_type,
        skill_level,
        location,
        job_requirements,
        job_schedule,
      } = data;
      setAddjob({
        role,
        job_type,
        job_requirements,
        skill_level,
        location,
        job_schedule,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //useEffect for jobdetails input
  useEffect(() => {
    if (id) {
      jobDetails();
    }
  }, [id]);
  //useEffect for location input
  useEffect(() => {
    locationFetch();
  }, []);

  const handleSubmit = async (e: any, url: string, method: "POST" | "PUT") => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    e.preventDefault();
    console.log(addJob);
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addJob),
      });
      const data = await res.json();
      toast.success("New job created successfully");
      setAddjob(initialValue);
      close();
    } catch (error) {
      toast.error("uh oh, wrong login details!");
      console.log(error);
    }
  };
  return (
    <Modal
      className=""
      opened={opened}
      onClose={() => {
        setAddjob(initialValue);
        close();
      }}
      title=""
      size={600}
      centered
    >
      <ToastContainer toastClassName={"CustomToast"} />
      {/* Modal content */}
      <main className="flex flex-col gap-4 px-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-[#4A4C58]">Upload Job</h3>
          <p className="text-[#948E8E] text-sm font-medium">
            Enter the details of the job
          </p>
        </div>
        <div>
          <h3 className="text-[#38CB89] text-base ">Job Description</h3>
          <hr className=" border-1 border-[#D0D5DD] mt-3" />
        </div>
        <section className="flex items-center gap-4">
          <div className="w-[50%]">
            <p>Role Title</p>
            <TextInput
              value={addJob.role}
              onChange={(e) => setAddjob({ ...addJob, role: e.target.value })}
            />
          </div>
          <div className="w-[50%]">
            <p>Job Types</p>
            <Select
              data={[
                { value: "On-site", label: "On-site" },
                { value: "Remote", label: "Remote" },
                { value: "Hybrid", label: "Hybrid" },
              ]}
              value={addJob.job_type}
              onChange={(value) => setAddjob({ ...addJob, job_type: value })}
            />
          </div>
        </section>
        <section className="flex items-center gap-4">
          <div className="w-[50%]">
            <p>Skill Level</p>
            <Select
              data={[
                { value: "Junior", label: "Junior" },
                { value: "Mid-level", label: "Mid-level" },
                { value: "Senior", label: "Senior" },
              ]}
              value={addJob.skill_level}
              onChange={(value) => setAddjob({ ...addJob, skill_level: value })}
            />
          </div>
          <div className="w-[50%]">
            <p>Location</p>
            <MultiSelect
              value={addJob.location}
              data={newLocation}
              onChange={(value) => setAddjob({ ...addJob, location: value })}
            />
          </div>
        </section>
        <section className="w-full">
          <p>Job Schedule</p>
          <Select
            data={[
              { value: "Full-time", label: "Full-time" },
              { value: "Project-based", label: "Project-based" },
            ]}
            value={addJob.job_schedule}
            onChange={(value) => setAddjob({ ...addJob, job_schedule: value })}
          />
        </section>
        <p>Job Requirements</p>
        <section className="border border-[#dddddd]">
          <textarea
            name=""
            id=""
            rows={10}
            className="w-full border-1 border-black outline-none"
            value={addJob.job_requirements}
            onChange={(e) =>
              setAddjob({ ...addJob, job_requirements: e.target.value })
            }
          ></textarea>
        </section>
        <Button
          type="submit"
          styles={{
            root: {
              "&:hover": {
                background: "red",
              },
            },
          }}
          onClick={(e) => {
            if (id) {
              handleSubmit(e, editUrl, "PUT");
            } else handleSubmit(e, url, "POST");
          }}
          className="w-full py-1 bg-[#38CB89]"
        >
          Post Job
        </Button>
      </main>
    </Modal>
  );
}
