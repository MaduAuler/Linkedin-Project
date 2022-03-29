import "./Sidebar.css";
import { useEffect, useState } from "react";
import { Container, Row, Image, Button } from "react-bootstrap";

import { BsQuestionCircleFill } from "react-icons/bs";

const MySidebar = () => {
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setProfiles(data);
        console.log(data);
      } else {
        alert("Error fetching profiles");
      }
    } catch (error) {
      alert("Error fetching profiles");
    }
  };

  return (
    <>
      <div className="sidebar mt-4">
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Edit public profile & URL</p>
            <p className="stat_number">
              <BsQuestionCircleFill style={{ color: "#707070" }} />
            </p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="stat_number">
              <BsQuestionCircleFill style={{ color: "#707070" }} />
            </p>
          </div>
        </div>
      </div>

      <Container fluid className="mt-4 sidebar">
        <Row className="py-4 ml-3">
          <h5 className="mb-0">People also viewed</h5>
        </Row>
        {Object.keys(profiles)
          .map((profile, i) => {
            return (
              <>
                <Row className="d-flex">
                  <div className="ml-3">
                    <Image src={profiles[profile].image} className="mr-2" />
                  </div>
                  <div className="pl-1 text-left">
                    <h6 className="mb-0">
                      {profiles[profile].name}, {profiles[profile].surname}
                    </h6>
                    <p className="mb-0">{profiles[profile].title}</p>
                    <Button>Connect</Button>
                  </div>
                </Row>
              </>
            );
          })
          .slice(0, 10)}
        <hr className="my-3" />
        <div className="bottom-div">
          <h6 className="pb-2 d-inline-block">Show more</h6>
          <i className="fa-solid fa-arrow-down d-inline-block ml-2"></i>
        </div>
      </Container>
    </>
  );
};

export default MySidebar;
