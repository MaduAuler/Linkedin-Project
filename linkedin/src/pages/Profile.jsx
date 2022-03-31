import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={7}>
          <Jumbotron />
        </Col>
        <Col md={5}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
