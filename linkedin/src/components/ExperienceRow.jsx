import { Row, Image } from 'react-bootstrap'

const ExperienceRow = () => {
  return (
    <>
      <Row className="d-flex">
        <div className="pl-5">
          <Image src="http://placekitten.com/50/50" className="mr-2" />
        </div>
        <div className="pl-1 text-left">
          <h6 className="mb-0">Frontend developer</h6>
          <p className="mb-0">Company name</p>
          <p className="mb-0">Feb 2022 - present・2mos</p>
          <p className="mb-0">Remote</p>
        </div>
      </Row>
      <hr className="my-3" />
    </>
  )
}

export default ExperienceRow

// EXPERIENCE Model:
// {
//     "_id": "5d925e677360c41e0046d1f5",  			// server generated
//     "role": "CTO",
//     "company": "Strive School",
//     "startDate": "2019-06-16",
//     "endDate": "2019-06-16", 									// could be null
//     "description": "Doing stuff",
//     "area": "Berlin",
//     "username": "admin",  										// server generated
//     "createdAt": "2019-09-30T19:58:31.019Z",  // server generated
//     "updatedAt": "2019-09-30T19:58:31.019Z",  // server generated
//     "__v": 0  																// server generated
//     "image": ... 															// server generated on upload
// }
