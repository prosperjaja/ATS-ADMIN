import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

function Notification({ opened, close }) {
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}
export default Notification;
