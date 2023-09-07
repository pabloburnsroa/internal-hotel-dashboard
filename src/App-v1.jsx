import styled from "styled-components";
import GlobalStyles from "./assets/GlobalStyles";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Heading from "./components/ui/Heading";
import Row from "./components/ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hotel Nexus</Heading>
            <Heading as="h2">Check in and out</Heading>
            <Button onClick={() => alert("Check in")} variation='primary' size='small'>Check in</Button>
            <Button onClick={() => alert("Check out")}>Check out</Button>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="number of guests" />
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
