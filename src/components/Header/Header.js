import React from "react";
import { Jumbotron, Form } from "react-bootstrap";

function Header({ sortbyName }) {
  return (
    <Jumbotron id="jumbotron" fluid>
      <h1 id="site-name"> Employee tracker</h1>
      <Form.Group id="search-field" controlId="exampleForm.ControlInput1">
        <Form.Control
          id="place-holder"
          size="md"
          type="text"
          placeholder="Search your directory"
        />
      </Form.Group>

      <Form inline>

        <Form.Check
          type="checkbox"
          className="my-1 mr-sm-2"
          id="check-box"
          label="Sort Alphabetically"
          onChange={sortbyName}
          custom
        />
      </Form>
    </Jumbotron>
  );
}

export default Header;
