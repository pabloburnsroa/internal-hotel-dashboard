import Row from "../components/ui/Row";
import Heading from "../components/ui/Heading";
import RoomTable from "../features/rooms/components/RoomTable";
import Button from '../components/ui/Button'
import { useState } from "react";
import CreateRoomForm from "../features/rooms/components/CreateRoomForm";

function Rooms() {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Rooms</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <RoomTable />
        <Button onClick={()=> setShowForm((show) => !show)}>Add new room</Button>
        {showForm && <CreateRoomForm/>}
      </Row>
    </>
  );
}
export default Rooms;
