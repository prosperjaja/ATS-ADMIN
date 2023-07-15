import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

function Delete({ opened, close, id }) {
  const url = `https://ats-admin-dashboard.onrender.com/api/job/${id}/job_delete`;

  const handleDelete = async () => {
    const token = JSON.parse(localStorage.getItem("my-user"))?.tokens?.access;

    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <div className="flex items-center gap-2 justify-end">
          <button onClick={close}>Cancel</button>
          <button onClick={handleDelete}>Confirm</button>
        </div>
      </Modal>
    </>
  );
}
export default Delete;
