import React from "react";
import { Card, Button } from "react-bootstrap";

function EmployeeCard() {
  return (
    <>
    <Card 
    id="employee-card" 
    bg='light' 
    border="light">
      <Card.Img
        id="card-image"
        className="rounded-circle"
        variant="top"
        src="https://placekitten.com/100/100"
        r
      />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Engineer</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default EmployeeCard;
