import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, FileInput } from "@mantine/core";
import FileUplaod from "../common/file-upload";
import { useState } from "react";
import { Gallery } from "iconsax-react";

interface ModalType {
  opened: boolean;
  close: () => void;
}

const url =
  "https://ats-admin-dashboard.onrender.com/api/ats_admin/profile_picture";

function EditProfilePicture({ opened, close }: ModalType) {
  const [adminProfile, setAdminProfile] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;
    try {
      const formData = new FormData();
      formData.append("profile_picture", image);
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      setAdminProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(adminProfile);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Change Profile Picture"
        centered
      >
        <section>
          <div className="py-8 relative">
            <Gallery color="#ccc" className="absolute left-20 top-[2.4rem]" />
            <FileInput onChange={(value) => setImage(value)} />
          </div>
          <Button
            className="py-2 px-12 bg-[#38CB89] flex justify-center items-center mx-auto my-4"
            type="submit"
            styles={{
              root: {
                "&:hover": {
                  background: "red",
                },
              },
            }}
            onClick={handleSubmit}
          >
            Upload Image
          </Button>
        </section>
      </Modal>
    </>
  );
}
export default EditProfilePicture;
