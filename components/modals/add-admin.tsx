import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Group,
  Button,
  Select,
  TextInput,
  PasswordInput,
} from "@mantine/core";

interface ModalType {
  opened: boolean;
  close: () => void;
}

export default function AddAdmin({ opened, close }: ModalType) {
  return (
    <>
      <Modal opened={opened} onClose={close} title="" centered>
        {/* Modal content */}
        <main className="flex flex-col gap-4 px-2">
          <section className="flex items-center gap-4">
            <div className="w-[50%]">
              <p>First Name</p>
              <TextInput />
            </div>
            <div className="w-[50%]">
              <p>Last Name</p>
              <TextInput />
            </div>
          </section>
          <section className="flex items-center gap-4">
            <div className="w-[50%]">
              <p>Password</p>
              <PasswordInput />
            </div>
            <div className="w-[50%]">
              <p>Confirm Password</p>
              <PasswordInput />
            </div>
          </section>
          <section className="flex items-center gap-4">
            <div className="w-[50%]">
              <p>Position</p>
              <TextInput placeholder="FrontEnd" />
            </div>
            <div className="w-[50%]">
              <p>Permission Level</p>
              <Select
                data={[
                  { value: "Content Manager", label: "Content Manager" },
                  { value: "Member Manager", label: "Member Manager" },
                  {
                    value: "Application Manager",
                    label: "Application Manager",
                  },
                  { value: "Assessment Manager", label: "Assessment Manager" },
                ]}
              />
            </div>
          </section>
          <section className="w-[50%]">
            <p>Username</p>
            <TextInput />
          </section>
          <Button className="w-full py-1 bg-[#38CB89]">Add Sub admin</Button>
        </main>
      </Modal>
    </>
  );
}
