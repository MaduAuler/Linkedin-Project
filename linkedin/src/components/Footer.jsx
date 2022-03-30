import { Row, Col, Image } from "react-bootstrap";
import { BsFillQuestionCircleFill, BsGearFill } from "react-icons/bs";
import "../styles/Footer.css";

import Logo from "../assets/LI-Logo.png";

const MyFooter = () => (
  <footer>
    <Row className="text-center mt-5">
      <Col xs={{ span: 6, offset: 3 }}>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <Image
              src={Logo}
              alt="linkedin_logo"
              style={{ width: "8.4rem", height: "2.1rem" }}
            />
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="/" alt="footer link">
                    About
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Community Guidelines
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Privacy & Terms
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Sales Solution
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Safety Center
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="/" alt="footer link">
                    Accesibility
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Ad Choices
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Mobile
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a href="/" alt="footer link">
                    Talent Solutions
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Marketing Solutions
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Advertising
                  </a>
                </p>
                <p>
                  <a href="/" alt="footer link">
                    Small Business
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p style={{ fontWeight: "bold" }}>
                  <BsFillQuestionCircleFill
                    style={{ marginBottom: "3", marginRight: "3" }}
                  />
                  <a href="/" alt="footer link">
                    Questions?
                    <p style={{ fontWeight: "normal" }}>
                      Visit our Help Center.
                    </p>
                  </a>
                </p>
                <p style={{ fontWeight: "bold" }}>
                  <a href="/" alt="footer link">
                    <BsGearFill
                      style={{ marginBottom: "3", marginRight: "3" }}
                    />
                    Manage your account and privacy
                    <p style={{ fontWeight: "normal" }}>Go to your Settings.</p>
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2 mt-2 copyright">
            LinkedIn Corporation ©{new Date().getFullYear()}
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default MyFooter;
