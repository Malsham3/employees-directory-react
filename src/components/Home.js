import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import List from "../components/List";

class Home extends React.Component {
  state = {
    employees: [],
    searched: [],
    search: ""
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  async getAllEmployees() {

    await fetch("https://randomuser.me/api/?results=50&nat=us")
      .then((data) => data.json())
      .then((data) => this.setState({ 
        employees: data.results,
        searched: data.results
      }));
  };

  render() {
    return (
        <div className="Home">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Form.Control
            onChange={(e) => this.setState({ search: e.target.value })}
            value={this.state.search}
            type="text"
            placeholder="Search"
            name = "search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <List
          list = {this.state.searched.filter(({ name }) =>
            name.first.toLowerCase().includes(this.state.search.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default Home;
