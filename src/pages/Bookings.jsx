import BookingTable from "../features/bookings/components/BookingTable";


/**
 * What is prefetching?
 * Fetching data that may become necessary before it is rendered onto UI
 * e.g. fetching new page before it has been displayed
 */

function Bookings() {
  return (
    <>
      <BookingTable />
    </>
  );
}
export default Bookings;
