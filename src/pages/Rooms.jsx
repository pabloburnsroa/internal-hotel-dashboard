import Row from "../components/ui/Row";
import Heading from "../components/ui/Heading";
import RoomTable from "../features/rooms/components/RoomTable";
import AddRoom from "../features/rooms/components/AddRoom";

function Rooms() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Rooms</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <RoomTable />
        <AddRoom />
      </Row>
    </>
  );
}
export default Rooms;
