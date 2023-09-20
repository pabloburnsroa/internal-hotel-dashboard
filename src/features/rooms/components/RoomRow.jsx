import styled from "styled-components";
import { formatCurrency } from "../../../utils/helpers";
import { HiTrash, HiPencil } from "react-icons/hi2";
import { useDeleteRoom } from "../hooks/useRooms";
import { useState } from "react";
import CreateRoomForm from "./CreateRoomForm";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";
import ConfirmDelete from "../../../components/ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function RoomRow({ room }) {
  const [editForm, setEditForm] = useState(false);
  const { isDeleting, deleteRoom } = useDeleteRoom();
  const {
    id: roomId,
    name,
    max_capacity,
    price,
    discount,
    image,
    description,
  } = room;

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Room>{name}</Room>
        <div>Fits up to {max_capacity} guests</div>
        <Price>{formatCurrency(price)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <button
            onClick={() => setEditForm(() => !editForm)}
            disabled={isDeleting}
          >
            <HiPencil />
          </button>

          {/* <button onClick={() => deleteRoom(roomId)} disabled={isDeleting}>
            <HiTrash />
          </button> */}

          <Modal>
            <Modal.Open
              opens="delete"
              renderButton={(open) => (
                <button onClick={open}>
                  <HiTrash />
                </button>
              )}
            ></Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                disabled={isDeleting}
                onConfirm={() => deleteRoom(roomId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
      {editForm && <CreateRoomForm roomToEdit={room} />}
    </>
  );
}

export default RoomRow;
