import Feed from '../components/Feed'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../components/SideBar'

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={6}>
          <Feed />
        </Col>
        <Col md={4}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
