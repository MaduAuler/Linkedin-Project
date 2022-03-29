import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import MySidebar from "./components/Sidebar";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col md={8}>
            <Jumbotron />
          </Col>
          <Col md={4}>
            <MySidebar />
          </Col>
        </Row>
      </Container>
      <MyFooter />;
    </div>
  );
}

export default App;
