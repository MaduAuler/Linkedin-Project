import { useState, useEffect} from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Modal,
  Form,
} from 'react-bootstrap'
import './jumbotron.css'
import bgImage from '../assets/linkedin-background.jpg'
import { useParams } from 'react-router-dom'
import { FiEdit2 } from "react-icons/fi";
import Experience from './Experience'
import axios from 'axios'

const Jumbotron = () => {

  const {userId} = useParams()
  console.log(userId)
  const [myData, setMyData] = useState({})
  const [hide, setHide] = useState(false)
  const [myDataUpdate, setMyDataUpdate] = useState({
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: ""
  })
  const [file, setFile] = useState(null)
  const [show, setShow] = useState(false);
  const[show2, setShow2] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    if(userId==="me") {
      fetchMyProfile("me")
      setHide(true)
    
    } else {
      fetchMyProfile(userId)
      setHide(false)
    }
  }, [userId])

  const fetchMyProfile = async (param) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/' + param,
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

  const editProfile = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/',

        {
          method: 'PUT',
          body: JSON.stringify(myDataUpdate),
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.ok) {
        fetchMyProfile()
        handleClose()
      } else {
        console.log('fetch is not ok')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleFile = (e)=> {
    let file = e.target.files[0]
    setFile(file)
  }


  const handleUpload = ()=> {
    let formdata = new FormData()

    formdata.append('profile', file)

   axios({
    url:'https://striveschool-api.herokuapp.com/api/profile/62416c80d339840015c883b5/picture',
    method:"POST",
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmM4MGQzMzk4NDAwMTVjODgzYjUiLCJpYXQiOjE2NDg0NTQ3OTksImV4cCI6MTY0OTY2NDM5OX0.JWs4GSyt7R0dtISwmer1bgb6M0m4ote627Y_T1Ze67s',
    },
    data: formdata
  }).then((res)=>{
  }, (err) =>{
    console.log(err)
  })

  handleClose2()

  }

  return (
    <>
      <Container className="mt-4 jumbotron-container">
        <div className="bg-div" style={{ backgroundImage: `url(${bgImage})` }}>
          <i className="fa-solid fa-camera" ></i>
        </div>

        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="file" onChange={(e)=> 
            handleFile(e)}/>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> 
            handleUpload()}>
            Upload
          </Button>
          </form>
        </Modal.Body>
    
      </Modal>

        <Row className="edit-div px-4">
       {hide ? <Button onClick={handleShow2}><Image src={myData.image} roundedCircle /></Button> : <Image src={myData.image} roundedCircle />} 
          
          <button onClick={handleShow} className="button-container">
           {hide ? <FiEdit2 className='button-edit mt-4'/> : <div className='mt-5'></div>} 

          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Intro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={myDataUpdate.name}
                    onChange={(e) =>
                      setMyDataUpdate({
                        ...myDataUpdate,
                        name: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Surname"
                    value={myDataUpdate.surname}
                    onChange={(e) =>
                      setMyDataUpdate({
                        ...myDataUpdate,
                        surname: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={myDataUpdate.email}
                    onChange={(e) =>
                      setMyDataUpdate({
                        ...myDataUpdate,
                        email: e.target.value,
                      })
                    }
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Bio"
                    value={myDataUpdate.bio}
                    onChange={(e) =>
                      setMyDataUpdate({
                        ...myDataUpdate,
                        bio: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={myDataUpdate.title}
                    onChange={(e) =>
                      setMyDataUpdate({
                        ...myDataUpdate,
                        title: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Area"
                    value={myDataUpdate.area}
                    onChange={(e) =>
                      setMyDataUpdate({
                        ...myDataUpdate,
                        area: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Button variant="primary" onClick={editProfile}>
                  Edit
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </Row>
        <Row>
          <Col sm={12} md={6} className="name-div pl-5">
            <h3 className="mb-0">
              {myData.name} {myData.surname}
            </h3>
            <h5 className="mb-0">{myData.title}</h5>
            <p className="mb-0">
              {myData.area}・<span>Contact info</span>
            </p>
            <p className="my-2">
              <span>connections</span>
            </p>
          </Col>
        </Row>
        <Row className=" mb-4 buttons ml-5">
          <Button variant="primary">Open to</Button>
          <Button variant="primary" className="mx-2">
            Add profile section
          </Button>
          <Button variant="primary">More</Button>
        </Row>
        <Row className="px-5 pb-4 d-flex justify-content-between carousel-div">
          <Card>
            <Card.Body className="d-flex justify-content-between">
              <div>
                <p>Open to work</p>
                <p>Frotend developer</p>
                <p>See all detail</p>
              </div>
              <div>
                <i className="fa-solid fa-pen py-4 pr-3"></i>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="d-flex justify-content-between">
              <div>
                <p>
                  Share that you’re hiring and attract qualified candidates.
                </p>
                <p></p>
                <p>Get started</p>
              </div>
              <div>
                <i className="fa-solid fa-xmark d-contents"></i>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Container className="mt-4 activity-container">
        <Row className="pt-4">
          <Col sm={12} md={6} className="name-div pl-5">
            <h5 className="mb-0">Activity</h5>
            <p className="">
              <span>connections</span>
            </p>
          </Col>
          <Col sm={12} md={6} pr-5 className="d-flex education-div pr-5">
            <Button variant="primary" className="mx-2">
              Start a post
            </Button>
          </Col>
        </Row>
        <Row>
          <div className="pl-5 middle-div">
            <h6 className="mb-0">You haven't posted lately</h6>
            <p>Recent post you share or commented on will be displayed here</p>
          </div>
        </Row>
        <hr className="my-2" />
        <div className="bottom-div  d-flex justify-content-center">
          <h6 className="pb-2 d-inline-block">Show all activity</h6>
          <i className="fa-solid fa-arrow-right-long d-inline-block ml-2 mt-1"></i>
        </div>
      </Container>

      <Container className="mt-4 experience-container">

    
  { myData._id &&  <Experience  id={myData._id}/>}

      </Container>

      <Container className="mt-4 education-container">
        <Row className="py-4">
          <Col sm={12} md={6} className="name-div pl-5">
            <h5 className="mb-0">Education</h5>
          </Col>
          <Col sm={12} md={6} pr-5 className="d-flex education-div pr-5">
            <i className="fa-solid fa-plus mr-3"></i>
            <i className="fa-solid fa-pen"></i>
          </Col>
        </Row>
        <Row className="d-flex">
          <div className="pl-5">
            <Image src="https://place.dog/50/50" className="mr-2" />
          </div>
          <div className="pl-1 text-left">
            <h6 className="mb-0">Strive shool</h6>
            <p className="mb-0">Computer science</p>
            <p className="mb-0">Jan 2022 - present・2mos</p>
          </div>
        </Row>
        <hr className="my-3" />
        <Row className="d-flex">
          <div className="pl-5">
            <Image src="http://placekitten.com/50/50" className="mr-2" />
          </div>
          <div className="pl-1 text-left">
            <h6 className="mb-0">Epicode</h6>
            <p className="mb-0">Full stack developer</p>
            <p className="mb-0">Jan 2022 - present・2mos</p>
          </div>
        </Row>
        <hr className="my-3" />
        <div className="bottom-div  d-flex justify-content-center">
          <h6 className="pb-2 d-inline-block">Show all experiences</h6>
          <i className="fa-solid fa-arrow-right-long d-inline-block ml-2 mt-1"></i>
        </div>
      </Container>
    </>
  )
}

export default Jumbotron
