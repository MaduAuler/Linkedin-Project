import { useState, useEffect } from 'react'
import { Row, Image, Col, Modal, Form, Button } from 'react-bootstrap'

const Experience = (props) => {
  const [experiences, setExperiences] = useState([])
  const [idExperiences, setIdExperiences] = useState('')
  const [myId, setMyId] = useState('')

  const [postXp, setPostXp] = useState({
    role: '',
    company: '',
    startDate: '',
    description: '',
    area: '',
  })
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const settingId = (id) => {
    handleShow()
    setIdExperiences(id)
    console.log(id)
  }

  const editOrPost = () => {
    if (idExperiences) {
      console.log(idExperiences)
      putExperience(idExperiences)
    } else {
      postExperience()
    }
  }

  const deleteXp = (id) => {
    if (id) {
      deleteExperience(id)
    } else {
      console.log('error deleting')
    }
  }
  useEffect(() => {
    getExperience(props.id)
    if (props.id === '62416c80d339840015c883b5') {
      setMyId('62416c80d339840015c883b5')
    } else {
      setMyId('')
    }
  }, [props.id])

  const getExperience = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
          },
        },
      )
      if (response.ok) {
        const data = await response.json()
        setExperiences(data)
      } else {
        console.log('fetch is not ok')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const postExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.id}/experiences`,

        {
          method: 'POST',
          body: JSON.stringify(postXp),
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.ok) {
        getExperience()
        handleClose()
      } else {
        console.log('fetch is not ok')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const putExperience = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.id}/experiences/${id}`,

        {
          method: 'PUT',
          body: JSON.stringify(postXp),
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.ok) {
        getExperience()
        handleClose()
      } else {
        console.log('fetch is not ok')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteExperience = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.id}/experiences/${id}`,

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
        getExperience()
        handleClose()
      } else {
        console.log('fetch is not ok')
      }
    } catch (error) {
      console.log(error)
    }
  }

  //our id: 62416c80d339840015c883b5

  return (
    <>
      <Row className="py-4">
        <Col sm={12} md={6} className="name-div pl-5">
          <h5 className="mb-0">Experience</h5>
        </Col>
        <Col sm={12} md={6} pr-5 className="d-flex education-div pr-5">
          {myId && (
            <Button onClick={handleShow}>
              {' '}
              <i className="fa-solid fa-plus mr-3"></i>
            </Button>
          )}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Post Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Role"
                    value={postXp.role}
                    onChange={(e) =>
                      setPostXp({
                        ...postXp,
                        role: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company"
                    value={postXp.company}
                    onChange={(e) =>
                      setPostXp({
                        ...postXp,
                        company: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Start Date"
                    value={postXp.startDate}
                    onChange={(e) =>
                      setPostXp({
                        ...postXp,
                        startDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    value={postXp.description}
                    onChange={(e) =>
                      setPostXp({
                        ...postXp,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Area"
                    value={postXp.area}
                    onChange={(e) =>
                      setPostXp({
                        ...postXp,
                        area: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Button variant="primary" onClick={editOrPost}>
                  Post
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
      {experiences.map((experience) => {
        return (
          <>
            <Row className="d-flex">
              <div className="pl-5">
                <Image
                  src={experience.image}
                  className="mr-2 image-experience"
                />
              </div>
              <div className="pl-1 text-left">
                <h6 className="mb-0">{experience.company}</h6>
                <p className="mb-0">{experience.role}</p>
                <p className="mb-0">
                  {experience.startDate} {experience.endDate}
                </p>
                <p className="mb-0">{experience.area}</p>
                {myId && (
                  <Button
                    className="mr-2"
                    onClick={() => settingId(experience._id)}
                  >
                    {' '}
                    <i className="fa-solid fa-pen"></i>
                  </Button>
                )}
                {myId && (
                  <Button
                    className="mr-2"
                    onClick={() => deleteXp(experience._id)}
                  >
                    Delete
                  </Button>
                )}
              </div>
              <div></div>
            </Row>
            <hr className="my-3" />
          </>
        )
      })}
    </>
  )
}

export default Experience
