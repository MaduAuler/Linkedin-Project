import { Container, Row, Col } from 'react-bootstrap'
import FeedSideBar from '../components/FeedSideBar'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import '../styles/feedPage.css'

const FeedPage = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="both-sidebars" xl={3}>
          <FeedSideBar />
        </Col>
        <Col md={12} lg={8} xl={6}>
          <Feed />
        </Col>
        <Col md={12} className="both-sidebars" xl={3}>
          <SideBar />
        </Col>
      </Row>
    </Container>
  )
}

export default FeedPage
