import "./Sidebar.css";
import { useEffect, useState } from "react";

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

      <div className="sidebar mt-4">
        <div className="sidebar_stats">
          <div className="sidebar_stat"></div>
          {profiles.map((profile, i) => {
            <div>{profile[i].name}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default MySidebar;
