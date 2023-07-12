import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, TextInput, Select } from "@mantine/core";
import { AddButton } from "../common/add-button";
import { createContext, Context } from "react";
import { useState } from "react";

interface ModalType {
  opened: boolean;
  close: () => void;
}

const initialValue = {
  role_title: "",
  job_course: "",
  skill_level: "",
  location: "",
  job_requirements: "",
};

export default function AddJob({ opened, close }: ModalType) {
  const [addJob, setAddjob] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addJob);
    setAddjob(initialValue);
  };
  return (
    <Modal
      className=""
      opened={opened}
      onClose={close}
      title=""
      size={600}
      centered
    >
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
              value={addJob.role_title}
              onChange={(e) =>
                setAddjob({ ...addJob, role_title: e.target.value })
              }
            />
          </div>
          <div className="w-[50%]">
            <p>Job Course</p>
            <Select
              data={[
                { value: "react", label: "React" },
                { value: "Angular", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
              value={addJob.job_course}
              onChange={(value) => setAddjob({ ...addJob, job_course: value })}
            />
          </div>
        </section>
        <section className="flex items-center gap-4">
          <div className="w-[50%]">
            <p>Skill Level</p>
            <Select
              data={[
                { value: "Beginner", label: "Beginner" },
                { value: "Intermediate", label: "Intermediate" },
                { value: "Advanced", label: "Advanced" },
              ]}
              value={addJob.skill_level}
              onChange={(value) => setAddjob({ ...addJob, skill_level: value })}
            />
          </div>
          <div className="w-[50%]">
            <p>Location</p>
            <Select
              data={[
                { value: "Abuja", label: "Abuja" },
                { value: "Lagos", label: "Lagos" },
                { value: "Port harcourt", label: "Port harcourt" },
                { value: "Ibadan", label: "Ibadan" },
              ]}
              value={addJob.location}
              onChange={(value) => setAddjob({ ...addJob, location: value })}
            />
          </div>
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
          onClick={handleSubmit}
          className="w-full py-1 bg-[#38CB89]"
        >
          Post Job
        </Button>
      </main>
    </Modal>
  );
}
