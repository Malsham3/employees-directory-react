import React from "react";
import EmployeeCard from "./EmployeeCard";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";

class Wrapper extends React.Component {
  state = {
    employees: [],
    arr: [],
    search: "",
    sort: "",
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  async getAllEmployees() {
    await fetch("https://randomuser.me/api/?results=12&nat=us")
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          employees: data.results,
        })
      );
  }

  sortbyName = (e) => {
    //prevents page reload
    e.preventDefault();

    //take in current state
    let { employees, sort, arr } = this.state;

    //checks if array of employees is sorted, if not sort by name.
    !sort
      ? (arr = employees.sort((a, b) => (a.name.first > b.name.first ? 1 : -1)))
      : (arr = employees.reverse());

    //set new state with sorted data
    this.setState({ employees: arr, sort: !sort });
  };

  render() {
    return (
      <Container fluid>
        <EmployeeCard
          list={this.state.employees.filter(({ name }) =>
            name.first.toLowerCase().includes(this.state.search.toLowerCase())
          )}
          sortbyName={this.sortbyName}
        />
      </Container>
    );
  }
}

export default Wrapper;
