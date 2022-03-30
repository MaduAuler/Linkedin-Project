import Feed from '../components/Feed'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import FeedSideBar from '../components/FeedSideBar'

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={7}>
          <Feed />
        </Col>
        <Col md={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
