import { Container, Row, Image, Modal, Form, Button } from 'react-bootstrap'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { BsArrow90DegRight } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'
import '../styles/feed.css'
import { useState, useEffect } from 'react'

const Feed = () => {
  // for GET
  const [feeds, setFeeds] = useState([])

  // for POST
  const [postFeed, setPostFeed] = useState({ text: '' })

  // for PUT
  const [feedId, setFeedId] = useState('')
const [myData, setMyData] = useState({})
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const openEditModal = (id) => {
    handleShow()
    setFeedId(id)
    console.log(id)
  }

  useEffect(() => {
    showFeeds()
    fetchMyProfile()
  }, [feedId])

  const showFeeds = async () => {
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
        const setToData = data.reverse().slice(0, 10)
        setFeeds(setToData)
      } else {
        console.log('something is wrong with fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const submitFeed = async () => {
    try {
      const response = await fetch(
        feedId
          ? 'https://striveschool-api.herokuapp.com/api/posts/' + feedId
          : 'https://striveschool-api.herokuapp.com/api/posts/',
        {
          method: feedId ? 'PUT' : 'POST',
          body: JSON.stringify(postFeed),
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.ok) {
        showFeeds()
        handleClose()
      } else {
        console.log('something is wrong with fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteFeed = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/' + feedId,

        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.ok) {
        showFeeds()
        handleClose()
      } else {
        console.log('something is wrong with fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }


  const fetchMyProfile = async (param) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
          },
        },
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data._id)
        setMyData(data)
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
          <Image src={myData.image} className="icon-image" />
          <Form className="ml-2" onClick={handleShow}>
            <Form.Group>
              <Form.Control type="text" placeholder="Start a post" />
            </Form.Group>
          </Form>
          {/* Modal to post */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create a post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Form className="ml-2">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Start a post"
                      value={postFeed.text}
                      onChange={(e) =>
                        setPostFeed({
                          text: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Form>
                <div className="d-flex justify-content-center">
                  {feedId ? (
                    <>
                      <Button
                        variant="success"
                        onClick={() => submitFeed(feedId)}
                        className="ml-3"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={deleteFeed}
                        className="ml-3"
                      >
                        Delete
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={handleClose}
                        className="ml-3"
                      >
                        Close
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="primary" onClick={submitFeed}>
                        Post
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={handleClose}
                        className="ml-3"
                      >
                        Close
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </Row>

        <Row className="post-icons justify-content-around">
          <button>
            <div className="d-flex align-items-baseline">
              <i class="fa-solid fa-image" style={{ color: '#70B5F8' }}></i>
              <p className="ml-3">Photo</p>
            </div>
          </button>
          <button>
            <div className="d-flex align-items-baseline">
              <i class="fa-brands fa-youtube" style={{ color: '#7FC15E' }}></i>
              <p className="ml-3">Video</p>
            </div>
          </button>
          <button>
            <div className="d-flex align-items-baseline">
              <i
                class="fa-solid fa-calendar-week"
                style={{ color: '#E7A43E' }}
              ></i>
              <p className="ml-3">Event</p>
            </div>
          </button>
          <button>
            <div className="d-flex align-items-baseline">
              <i
                class="fa-solid fa-pen-to-square"
                style={{ color: '#FC9294' }}
              ></i>
              <p className="ml-3">Write article</p>
            </div>
          </button>
        </Row>
      </Container>
      <hr />

      {feeds.map((feed) => {
        return (
          <Container className="feed-container mb-2" key={feed._id}>
            <Row className="py-3 justify-content-between">
              <div className="d-flex">
                {/* <Image src={feed.user.user.image} /> */}
                <div>
                  <h6>{feed.username}</h6>
                  {/* <p className="mb-0" style={{ fontSize: '0.8em' }}>
                      {feed.user.title}
                    </p> */}
                  <p className="mb-0" style={{ fontSize: '0.8em' }}>
                    {feed.createdAt.slice(0, -8)}
                  </p>
                </div>
              </div>
              <button
                className="feed-edit-button"
                onClick={() => {
                  openEditModal(feed._id)
                }}
              >
                <i class="fa-solid fa-ellipsis"></i>
              </button>
            </Row>
            <Row>
              <p>{feed.text}</p>
            </Row>
            <hr />

            <Row className="feed-reaction justify-content-around">
              <button>
                <div className="d-flex">
                  <AiOutlineLike className="feed-icon" />
                  <p className="">Like</p>
                </div>
              </button>
              <button>
                <div className="d-flex">
                  <FaRegCommentDots className="feed-icon" />
                  <p className="ml-2">Comment</p>
                </div>
              </button>
              <button>
                <div className="d-flex">
                  <BsArrow90DegRight className="feed-icon" />
                  <p className="ml-2">Share</p>
                </div>
              </button>
              <button>
                <div className="d-flex">
                  <RiSendPlaneFill className="feed-icon" />
                  <p className="ml-2">Send</p>
                </div>
              </button>
            </Row>
          </Container>
        )
      })}
    </>
  )
}

export default Feed
