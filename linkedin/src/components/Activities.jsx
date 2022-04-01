import { Container, Row, Col, Button } from "react-bootstrap";

const ActivityContainer = () => {
  return (
    <Container className="mt-4 activity-container">
      <Row className="pt-4">
        <Col sm={12} md={6} className="name-div pl-5">
          <h5 className="mb-0">Activity</h5>
          <p className="">
            <span>connections</span>
          </p>
        </Col>
        <Col sm={12} md={6} pr-5 className="d-flex education-div pr-5">
          <Button variant="primary" className="mx-2">
            Start a post
          </Button>
        </Col>
      </Row>
      <Row>
        <div className="pl-5 middle-div">
          <h6 className="mb-0">You haven't posted lately</h6>
          <p>Recent post you share or commented on will be displayed here</p>
        </div>
      </Row>
      <hr className="my-2" />
      <div className="bottom-div  d-flex justify-content-center">
        <h6 className="pb-2 d-inline-block">Show all activity</h6>
        <i className="fa-solid fa-arrow-right-long d-inline-block ml-2 mt-1"></i>
      </div>
    </Container>
  );
};

export default ActivityContainer;
