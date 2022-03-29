import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import "../styles/jumbotron.css";

const Jumbotron = () => {
  return (
    <>
      <Container fluid className="mt-4 jumbotron-container">
        <div className="bg-div">
          <i class="fa-solid fa-camera"></i>
        </div>
        <Row className="edit-div px-4">
          <Image src="http://placekitten.com/150/150" roundedCircle />
          <i className="fa-solid fa-pen py-4 pr-3"></i>
        </Row>
        <Row>
          <Col sm={12} md={6} className="name-div pl-5">
            <h3 className="mb-0">name</h3>
            <h5 className="mb-0">occupation</h5>
            <p className="mb-0">
              city, country・<span>Contact info</span>
            </p>
            <p className="my-2">
              <span>connections</span>
            </p>
          </Col>
          <Col sm={12} md={6} pr-5 className="d-flex education-div pr-5">
            <Image src="http://placekitten.com/30/30" className="mr-2" />
            <p>education</p>
          </Col>
        </Row>
        <Row className=" mb-4 buttons ml-5">
          <Button variant="primary">Open to</Button>
          <Button variant="primary" className="mx-2">
            Add profile section
          </Button>
          <Button variant="primary">More</Button>
        </Row>
        <Row className="px-5 pb-4 d-flex justify-content-between carousel-div">
          <Card>
            <Card.Body className="d-flex justify-content-between">
              <div>
                <p>Open to work</p>
                <p>Frotend developer</p>
                <p>See all detail</p>
              </div>
              <div>
                <i className="fa-solid fa-pen py-4 pr-3"></i>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="d-flex justify-content-between">
              <div>
                <p>
                  Share that you’re hiring and attract qualified candidates.
                </p>
                <p></p>
                <p>Get started</p>
              </div>
              <div>
                <i className="fa-solid fa-xmark d-contents"></i>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Container fluid className="mt-4 activity-container">
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
        <div className="bottom-div">
          <h6 className="pb-2 d-inline-block">Show all activity</h6>
          <i class="fa-solid fa-arrow-right-long d-inline-block ml-2"></i>
        </div>
      </Container>

      <Container fluid className="mt-4 experience-container">
        <Row className="py-4">
          <Col sm={12} md={6} className="name-div pl-5">
            <h5 className="mb-0">Experience</h5>
          </Col>
          <Col sm={12} md={6} pr-5 className="d-flex education-div pr-5">
            <i class="fa-solid fa-plus mr-3"></i>
            <i className="fa-solid fa-pen"></i>
          </Col>
        </Row>
        <Row className="d-flex">
          <div className="pl-5">
            <Image src="http://placekitten.com/50/50" className="mr-2" />
          </div>
          <div className="pl-1 text-left">
            <h6 className="mb-0">Frontend developer</h6>
            <p className="mb-0">Company name</p>
            <p className="mb-0">Feb 2022 - present・2mos</p>
            <p className="mb-0">Remote</p>
          </div>
        </Row>
        <hr className="my-3" />
        <Row className="d-flex">
          <div className="pl-5">
            <Image src="http://placekitten.com/50/50" className="mr-2" />
          </div>
          <div className="pl-1 text-left">
            <h6 className="mb-0">Frontend developer</h6>
            <p className="mb-0">Company name</p>
            <p className="mb-0">Feb 2022 - present・2mos</p>
            <p className="mb-0">Remote</p>
          </div>
        </Row>
        <hr className="my-3" />
        <Row className="d-flex">
          <div className="pl-5">
            <Image src="http://placekitten.com/50/50" className="mr-2" />
          </div>
          <div className="pl-1 text-left">
            <h6 className="mb-0">Frontend developer</h6>
            <p className="mb-0">Company name</p>
            <p className="mb-0">Feb 2022 - present・2mos</p>
            <p className="mb-0">Remote</p>
          </div>
        </Row>
        <hr className="my-3" />
        <div className="bottom-div">
          <h6 className="pb-2 d-inline-block">Show all experiences</h6>
          <i class="fa-solid fa-arrow-right-long d-inline-block ml-2"></i>
        </div>
      </Container>

      <Container fluid className="mt-4 education-container">
        <Row className="py-4">
          <Col sm={12} md={6} className="name-div pl-5">
            <h5 className="mb-0">Education</h5>
          </Col>
          <Col sm={12} md={6} pr-5 className="d-flex education-div pr-5">
            <i class="fa-solid fa-plus mr-3"></i>
            <i className="fa-solid fa-pen"></i>
          </Col>
        </Row>
        <Row className="d-flex">
          <div className="pl-5">
            <Image src="https://place.dog/50/50" className="mr-2" />
          </div>
          <div className="pl-1 text-left">
            <h6 className="mb-0">Strive shool</h6>
            <p className="mb-0">Computer science</p>
            <p className="mb-0">Jan 2022 - present・2mos</p>
          </div>
        </Row>
        <hr className="my-3" />
        <Row className="d-flex">
          <div className="pl-5">
            <Image src="http://placekitten.com/50/50" className="mr-2" />
          </div>
          <div className="pl-1 text-left">
            <h6 className="mb-0">Epicode</h6>
            <p className="mb-0">Full stack developer</p>
            <p className="mb-0">Jan 2022 - present・2mos</p>
          </div>
        </Row>
        <hr className="my-3" />
        <div className="bottom-div">
          <h6 className="pb-2 d-inline-block">Show all experiences</h6>
          <i class="fa-solid fa-arrow-right-long d-inline-block ml-2"></i>
        </div>
      </Container>
    </>
  );
};

export default Jumbotron;
