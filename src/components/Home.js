import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"

class Home extends React.Component {
    state = {
        all: [],
        search: ""
    }

    componentDidMount() {
        this.getAllEmployees();
    }

    getAllEmployees = () => {

        fetch("https://randomuser.me/api/?results=50&nat=us")
        .then((data) => data.json())
        .then((data) => this.setState({ all: data.results}))
    }

    render() {
        return (

            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl 
              onChange = {(e) => this.setState({search: e.target.value})}
              value = {this.state.search}
              type="text" 
              placeholder="Search" 
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
        
          );
    }
}

export default Home;