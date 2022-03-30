import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/SideBar";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Jumbotron />
        </Col>
        <Col md={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
