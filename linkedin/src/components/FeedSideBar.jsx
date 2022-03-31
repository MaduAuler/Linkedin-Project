import "../styles/FeedSideBar.css";
import { Container, Row } from "react-bootstrap";
import bgImage from '../assets/linkedin-background.jpg'
import { useEffect, useState } from "react";


const FeedSideBar = () => {
  const [myData, setMyData]= useState({})
  

  useEffect(() => {
  fetchProfiles()
  }, [])
  
  const fetchProfiles = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setMyData(data);
        console.log(data);
      } else {
        alert("Error fetching profiles");
      }
    } catch (error) {
      alert("Error fetching profiles");
    }
  };
  return (
    <Container className="sidebar">
      <Row className="sidebar-top">
        <img
          src={bgImage}
          alt=""
        />

        <div ><img className="sidebar-avatar" src={myData.image} alt="avatar_img" /></div>
        <h2>{myData.name} {myData.surname}</h2>
        <h4>{myData.email}</h4>
      </Row>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">1984</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post </p>
          <p className="sidebar-statNumber">1344</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>reactjs</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>programming</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>python</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>design</p>
        </div>
        <div className="sidebar-recentItem">
          <span className="sidebar-hash">#</span>
          <p>developer</p>
        </div>
      </div>
    </Container>
  );
};

export default FeedSideBar;
