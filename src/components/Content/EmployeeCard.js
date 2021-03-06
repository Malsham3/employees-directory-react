import React from "react";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import { Card } from "react-bootstrap";

function EmployeeCard({ list }) {
  return (
    <>
      {list.map(({ picture, name, email, phone, location, id }) => (
        <Card key={id.value} id="employee-card" bg="light" style={{ width: '18rem' }}>
          <Card.Img
            id="card-image"
            className="rounded-circle"
            variant="top"
            src={picture.large}
          />
          <Card.Body id="card-body">
            <Card.Title id="card-title">
              {name.first} {name.last}
            </Card.Title>
            <Card.Subtitle id="card-subtitle" className="mb-2 text-muted">
              Software Engineer
            </Card.Subtitle>
            <br />
            <Card.Text>
              <FaPhone id="icon" /> {phone}
              <br />
              <FaEnvelope id="icon"/>{" "}
              <a id="email" href={"mailto:"+{email}}>{email}</a> 
              <br />
              <FaHome id="icon" /> {location.city}, {location.state}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default EmployeeCard;
