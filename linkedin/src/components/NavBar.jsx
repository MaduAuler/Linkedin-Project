import {
  Container,
  Dropdown,
  InputGroup,
  DropdownButton,
} from 'react-bootstrap'
import '../styles/NavBar.css'
import {
  BsLinkedin,
  BsPeopleFill,
  BsFillGrid3X3GapFill,
  BsSearch,
  BsFillCaretDownFill,
} from 'react-icons/bs'
import { HiHome } from 'react-icons/hi'
import { MdWork, MdNotifications } from 'react-icons/md'
import { RiMessage3Fill } from 'react-icons/ri'
import person from '../person.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const [myData, setMyData]= useState({})

  useEffect(() => {
  fetchMyProfile()
  }, [])

  const fetchMyProfile = async () => {
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
     
    }
  }


  return (
    <div className="flex-container d-flex align-items-center ">
      <Container className="d-flex align-items-center ">
        <div className="logo-search d-flex align-items-center mr-1">
          <BsLinkedin className="img-logo mr-2" />
          <InputGroup.Prepend className="input-nav">
            <InputGroup.Text className="input-nav" id="basic-addon1">
              <BsSearch className="mr-2" />
              Search
            </InputGroup.Text>
          </InputGroup.Prepend>
        </div>
        <BsSearch className="mr-2 search-toggle" />
        <div className="mr-5 space"></div>
        <div className="mr-5 space"></div>

        <div className="icons-container d-flex align-items-center justify-content-center ml-1">
          <Link to="/posts/">
            <button className="mr-3 icon-div buttons">
              <HiHome className="icons" />
              <p className="icon-text">Home</p>
            </button>
          </Link>
          <button className="mr-3 icon-div buttons">
            <BsPeopleFill className="icons " />
            <p className="icon-text">My Network</p>
          </button>

          <button className="mr-3 icon-div buttons">
            <MdWork className="icons " />
            <p className="icon-text">Jobs</p>
          </button>

          <button className="mr-3 icon-div buttons icon-message">
            <RiMessage3Fill className="icons " />
            <p className="icon-text">Messaging</p>
          </button>

          <button className="mr-3 icon-div buttons">
            <MdNotifications className="icons" />
            <p className="icon-text">Notifications</p>
          </button>
          <DropdownButton
            variant="outline-secondary"
            title={
              <div className="d-flex flex-column h-100 ">
                <img
                  src={myData.image}
                  className="round"
                  style={{ height: '25px', width: '25px' }}
                />
                <div className="d-flex justify-content-center align-items-center arrow">
                  <span className="arrow">Me</span>
                  <BsFillCaretDownFill className="arrow" />
                </div>
              </div>
            }
            id="input-group-dropdown-1"
            className="dropdown-button h-100 "
          >
            {' '}
            <div className="d-flex align-items-center justify-content-center h-100">
              <div>
                <img
                  src={myData.image}
                  className="round mr-2"
                  style={{ height: '50px', width: '50px' }}
                ></img>
              </div>
              <div>
                {' '}
                <h5>{myData.name}</h5> <p>{myData.title}</p>
              </div>
            </div>
            <Link to="/profile/me">
              {' '}
              <button className="button-inside-dropdown">View Profile</button>
            </Link>
            <Dropdown.Divider />
            <div className="text-dropdown"> Account</div>
            <Dropdown.Item href="#">Setting & Privacy</Dropdown.Item>
            <Dropdown.Item href="#">Help</Dropdown.Item>
            <Dropdown.Item href="#">Language</Dropdown.Item>
            <Dropdown.Divider />
            <div className="text-dropdown"> Menage</div>
            <Dropdown.Item href="#">Post & Activity</Dropdown.Item>
            <Dropdown.Item href="#">Job Posting Account</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Sign out</Dropdown.Item>
          </DropdownButton>

          <div className="vr mr-4"></div>
          <DropdownButton
            variant="outline-secondary"
            title={
              <div className="d-flex flex-column h-100 align-items-center">
                <BsFillGrid3X3GapFill className="icon-grid" />
                <div className="d-flex justify-content-center align-items-center ">
                  <span>Work</span>
                  <BsFillCaretDownFill />
                </div>
              </div>
            }
            id="input-group-dropdown-1"
            className="dropdown-button h-100 drop2"
          >
            <button className="button-inside-dropdown">View Profile</button>
            <Dropdown.Divider />
            <div className="text-dropdown"> Account</div>
            <Dropdown.Item href="#">Setting & Privacy</Dropdown.Item>
            <Dropdown.Item href="#">Help</Dropdown.Item>
            <Dropdown.Item href="#">Language</Dropdown.Item>
            <Dropdown.Divider />
            <div className="text-dropdown"> Menage</div>
            <Dropdown.Item href="#">Post & Activity</Dropdown.Item>
            <Dropdown.Item href="#">Job Posting Account</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Sign out</Dropdown.Item>
          </DropdownButton>
          <p
            className="icon-text text-center ml-3"
            style={{ color: '#966e39' }}
          >
            {' '}
            Try Premium for free
          </p>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
