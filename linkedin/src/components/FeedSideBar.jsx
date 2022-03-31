import "../styles/FeedSideBar.css";
import { Container, Row } from "react-bootstrap";
import person from "../person.jpg";


const FeedSideBar = () => {
  return (
    <Container className="sidebar">
      <Row className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1648568713671-0c0a3eb47eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <img className="sidebar-avatar" src={person} alt="avatar_img" />
        <h2>Michael Redruello</h2>
        <h4>redruellomichael@gmail.com</h4>
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
