import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  Select,
  TextInput,
  PasswordInput,
  MultiSelect,
} from "@mantine/core";
import FileUplaod from "../common/file-upload";
import { useGlobalContext } from "@/components/common/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalType {
  opened: boolean;
  close: () => void;
}

const initialValue = {
  first_name: "",
  last_name: "",
  password: "",
  confirm_password: "",
  position: "",
  permission_level: [],
  username: "",
  email: "",
};

export default function AddAdmin({ opened, close }: ModalType) {
  const [admin, setAdmin] = useState(initialValue);
  const [error, setError] = useState("");
  const [adminPermit, setAdminPermit] = useState(null);
  const { setAdminCreated } = useGlobalContext();
  const permission =
    "https://ats-admin-dashboard.onrender.com/api/permission_level";
  const url =
    "https://ats-admin-dashboard.onrender.com/api/ats_admin/create_sub_admin";

  const fetchPermit = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const response = await fetch(permission, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setAdminPermit(
        data.reduce((acc, curr) => {
          acc.push({ label: curr.name, value: curr.id });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPermit();
  }, []);

  const handleSubmit = async (e) => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    e.preventDefault();
    console.log(admin);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(admin),
      });
      const data = await res.json();
      if (data?.error) {
        setError(data?.error);
        return;
      }
      setAdmin(data);
      setAdminCreated(true);
      setAdmin(initialValue);
      close();
    } catch {
      toast.error("uh oh, wrong login details!");
      console.log("error-response", error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} size={600} title="" centered>
        <ToastContainer toastClassName={"CustomToast"} />
        <form className="flex flex-col gap-4 px-2" onSubmit={handleSubmit}>
          <section className="flex items-center gap-4">
            <div className="w-[50%]">
              <p>First Name</p>
              <TextInput
                value={admin.first_name}
                onChange={(e) =>
                  setAdmin({ ...admin, first_name: e.target.value })
                }
              />
            </div>
            <div className="w-[50%]">
              <p>Last Name</p>
              <TextInput
                value={admin.last_name}
                onChange={(e) =>
                  setAdmin({ ...admin, last_name: e.target.value })
                }
              />
            </div>
          </section>
          <section className="flex items-center gap-4">
            <div className="w-[50%]">
              <p>Password</p>
              <PasswordInput
                value={admin.password}
                onChange={(e) =>
                  setAdmin({ ...admin, password: e.target.value })
                }
              />
            </div>
            <div className="w-[50%]">
              <p>Confirm Password</p>
              <PasswordInput
                value={admin.confirm_password}
                onChange={(e) =>
                  setAdmin({ ...admin, confirm_password: e.target.value })
                }
              />
            </div>
          </section>
          <section className="flex items-center gap-4">
            <div className="w-[50%]">
              <p>Position</p>
              <Select
                data={[
                  { value: "Frontend Developer", label: "Frontend Developer" },
                  { value: "Product Manager", label: "Product Manager" },
                  {
                    value: "Mobile Developer",
                    label: "Mobile Developer",
                  },
                  { value: "Backend Developer", label: "Backend Developer" },
                ]}
                onChange={(value) => setAdmin({ ...admin, position: value })}
              />
            </div>
            <div className="w-[50%]">
              <p>Permission Level</p>
              <MultiSelect
                data={adminPermit ?? []}
                onChange={(value) =>
                  setAdmin({ ...admin, permission_level: value })
                }
              />
            </div>
          </section>
          <section className="flex items-center gap-4">
            <div className="w-[50%]">
              <p>Username</p>
              <TextInput
                value={admin.username}
                onChange={(e) =>
                  setAdmin({ ...admin, username: e.target.value })
                }
              />
            </div>
            <div className="w-[50%]">
              Email
              <TextInput
                placeholder="email.com"
                value={admin.email}
                onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              />
            </div>
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
            className="w-full py-1 bg-[#38CB89]"
          >
            Add Sub admin
          </Button>
        </form>
      </Modal>
    </>
  );
}
