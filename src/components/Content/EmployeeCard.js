import React from "react";
import { Card, Button } from "react-bootstrap";

function EmployeeCard({list, sortbyName}) {
  return (
    <>
    {list.map(({ picture, name, email, phone, location, id }) => (
    <Card 
    id="employee-card" 
    bg='light' 
    border="light">
      <Card.Img
        id="card-image"
        className="rounded-circle"
        variant="top"
        src={picture.large}
        r
      />
      <Card.Body id="card-body">
        <Card.Title>{name.first} {name.last}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
        <Card.Text>
          {phone}
          <br/>
          {email}
          <br/>
          {location.city}, {location.state}
        </Card.Text>
        <Button variant="primary">Send an e-mail</Button>
      </Card.Body>
    </Card>
    ))}
    </>
  );
}

export default EmployeeCard;
