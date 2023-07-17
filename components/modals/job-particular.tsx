import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

function Notification({ opened, close }) {
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <div></div>
      </Modal>
    </>
  );
}
export default Notification;
