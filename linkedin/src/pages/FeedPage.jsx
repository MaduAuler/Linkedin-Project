import { Container, Row, Col } from "react-bootstrap";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import FeedSideBar from "../components/FeedSideBar";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <FeedSideBar />
        </Col>
        <Col md={6}>
          <Feed />
        </Col>
        <Col md={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
