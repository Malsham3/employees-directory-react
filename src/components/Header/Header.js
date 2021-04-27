import React from "react";
import { Jumbotron, Form } from "react-bootstrap";

function Header({sortbyName }) {
  return (
    <Jumbotron id="jumbotron" fluid>
      <h1 id="site-name"> Employee tracker</h1>
      <Form.Group id="search-field" controlId="exampleForm.ControlInput1">
        <Form.Control id="place-holder"
          size="md"
          type="text"
          placeholder="Search your directory"
        />
      </Form.Group>

      <Form.Group id="checkbox-label" controlId="formBasicCheckbox">
        <Form.Check id="checkbox"type="checkbox" label="Sort alphabetically" />
      </Form.Group>
    </Jumbotron>
  );
}

export default Header;
