// import { useState } from "react";
import Button from "../../../components/ui/Button";
import CreateRoomForm from "./CreateRoomForm";
import Modal from "../../../components/ui/Modal";

// function AddRoom() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen((show) => !show)}>
//         Add new room
//       </Button>
//       {isModalOpen && (
//         <Modal close={() => setIsModalOpen(false)}>
//           <CreateRoomForm onCloseModal={() => setIsModalOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddRoom() {
  return (
    <div>
      <Modal>
        <Modal.Open
          opens="room-form"
          renderButton={(open) => <Button onClick={open}>Add New Room</Button>}
        >
          {/* <Button>Add New Room</Button> */}
        </Modal.Open>
        <Modal.Window name="room-form">
          <CreateRoomForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddRoom;
