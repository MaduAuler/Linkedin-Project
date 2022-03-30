import { Container, Row, Image, Modal, Form, Button } from 'react-bootstrap'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { BsArrow90DegRight } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'
import '../styles/feed.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Feed = () => {
  const [feeds, setFeeds] = useState([])

  const { postId } = useParams()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    fetchFeeds()
  }, [])

  const fetchFeeds = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
          },
        },
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setFeeds(data)
      } else {
        console.log('fetch is not ok')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container className="post-container mt-4">
        <Row className="pt-3">
          <Image src="https://place.dog/50/50" className="icon-image" />
          <Form className="ml-2">
            <Form.Group>
              <Form.Control type="text" placeholder="Start a post" />
            </Form.Group>
          </Form>
        </Row>
        <Row className="post-icons justify-content-center">
          <div className="d-flex align-items-baseline">
            <i class="fa-solid fa-image" style={{ color: '#70B5F8' }}></i>
            <p className="ml-3 mr-5">Photo</p>
          </div>
          <div className="d-flex align-items-baseline">
            <i class="fa-brands fa-youtube" style={{ color: '#7FC15E' }}></i>
            <p className="ml-3 mr-5">Video</p>
          </div>
          <div className="d-flex align-items-baseline">
            <i
              class="fa-solid fa-calendar-week"
              style={{ color: '#E7A43E' }}
            ></i>
            <p className="ml-3 mr-5">Event</p>
          </div>
          <div className="d-flex align-items-baseline">
            <i
              class="fa-solid fa-pen-to-square"
              style={{ color: '#FC9294' }}
            ></i>
            <p className="ml-3">Write article</p>
          </div>
        </Row>
      </Container>
      <hr />

      {feeds
        .filter((feed) => feed.user)
        .map((feed) => {
          return (
            <Container className="feed-container mb-2" key={feed._id}>
              <Row className="py-3 justify-content-between">
                <div className="d-flex">
                  <Image src="https://place.dog/50/50" />
                  <div className="ml-2">
                    <h6 className="mb-0">{feed.username}</h6>
                    <p className="mb-0" style={{ fontSize: '0.8em' }}>
                      {feed.user.title}
                    </p>
                    <p className="mb-0" style={{ fontSize: '0.8em' }}>
                      {feed.createdAt.slice(0, -8)}
                    </p>
                  </div>
                </div>
                <div>
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
              </Row>
              <Row>
                <p>{feed.text}</p>
              </Row>
              <hr />
              <Row className="feed-reaction justify-content-around">
                <button
                  style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                  <div className="d-flex">
                    <AiOutlineLike className="feed-icon" />
                    <p className="">Like</p>
                  </div>
                </button>
                <button
                  style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                  <div className="d-flex">
                    <FaRegCommentDots className="feed-icon" />
                    <p className="ml-2">Comment</p>
                  </div>
                </button>
                <button
                  style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                  <div className="d-flex">
                    <BsArrow90DegRight className="feed-icon" />
                    <p className="ml-2">Comment</p>
                  </div>
                </button>
                <button
                  style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                  <div className="d-flex">
                    <RiSendPlaneFill className="feed-icon" />
                    <p className="ml-2">Send</p>
                  </div>
                </button>
              </Row>
            </Container>
          )
        })
        .slice(0, 10)}
    </>
  )
}

export default Feed
