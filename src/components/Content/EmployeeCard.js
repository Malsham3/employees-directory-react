import React from "react";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";

function EmployeeCard({ list, sortbyName }) {
  return (
    <>
      {list.map(({ picture, name, email, phone, location, id }) => (
        <Card id="employee-card" bg="light" style={{ width: '18rem' }}>
          <Card.Img
            id="card-image"
            className="rounded-circle"
            variant="top"
            src={picture.large}
            r
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
              <FaEnvelope id="icon" /> {email}
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
