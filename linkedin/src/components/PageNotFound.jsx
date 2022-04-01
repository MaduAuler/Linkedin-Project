import { Container, Row, Image } from "react-bootstrap";

import Error from "../assets/error.png";

const ErrorPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Image src={Error} alt="" style={{ height: "75vh" }} />
      </Row>
    </Container>
  );
};

export default ErrorPage;
