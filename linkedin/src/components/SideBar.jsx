import "../styles/SideBar.css";
import { useEffect, useState } from "react";
import { Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsQuestionCircleFill } from "react-icons/bs";

const SideBar = () => {
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
      <div className="mt-4 sidebar-people-container ">
        <div className="d-flex justify-content-between align-items-center">
          <p className="sidebar-top-text mt-2 ">Edit public profile & URL</p>
          <p>
            <BsQuestionCircleFill
              className="mr-4 "
              style={{ color: "#707070" }}
            />
          </p>
        </div>
        <hr />
        <div className="d-flex ml-2 justify-content-between">
          <p className="sidebar-top-text">Views on post</p>
          <p>
            <BsQuestionCircleFill
              className="mr-4 "
              style={{ color: "#707070" }}
            />
          </p>
        </div>
      </div>

      <div className="mt-4 sidebar-people-container">
        <Row className="py-4 ml-3">
          <h5 className="mb-0">People also viewed</h5>
        </Row>
        {Object.keys(profiles)
          .map((profile) => {
            return (
              <Row className="d-flex mb-2">
                <div className="ml-3 mb-5">
                  <Link to={"/profile/" + profiles[profile]._id}>
                    <Image
                      src={profiles[profile].image}
                      className="mr-2"
                      style={{ height: "50px" }}
                    />
                  </Link>
                </div>
                <div className="pl-1 text-left">
                  <h6 className="mb-0">
                    {profiles[profile].name}, {profiles[profile].surname}
                  </h6>
                  <p className="mb-0">{profiles[profile].title}</p>
                  <Button>Connect</Button>
                </div>
              </Row>
            );
          })
          .slice(0, 9)}
        <hr className="my-3" />
        <div className="bottom-div d-flex justify-content-center">
          <h6 className="pb-2 d-inline-block">Show more</h6>
          <i className="fa-solid fa-arrow-down d-inline-block ml-2 mt-1"></i>
        </div>
      </div>
    </>
  );
};

export default SideBar;
