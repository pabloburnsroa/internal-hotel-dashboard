import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import DashboardFilter from "../features/dashboard/components/DashboardFilter";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";

export default function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}
