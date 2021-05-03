import React from "react";
import { ImSearch } from "react-icons/im";
import { Jumbotron, Form } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

function Header({ handleSort, sortbyName }) {

  return (
    <Jumbotron id="jumbotron" fluid>
      <h1 id="site-name"> Employee tracker</h1>
      <Form.Group id="search-field" controlId="exampleForm.ControlInput1">
        <Form.Control
        onChange= {handleSort}
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
