import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header/Header";
import EmployeeCard from "../components/Content/EmployeeCard";

class NewHome extends React.Component {
  state = {
    employees: [],
    arr: [],
    search: "",
    sort: "",
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  handleSort = (e) => {
    this.setState({ search: e.target.value });
  };

  async getAllEmployees() {
    await fetch("https://randomuser.me/api/?results=24&nat=us")
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          employees: data.results,
        })
      );
  }

  sortbyName = (e) => {
    //prevents propagation of the same event from being called.
    e.stopPropagation();

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
      <>
        <Header handleSort={this.handleSort} sortbyName={this.sortbyName} />
        <Container fluid>
          <EmployeeCard
            list={this.state.employees.filter(({ name }) =>
              name.first.toLowerCase().includes(this.state.search.toLowerCase())
            )}
          />
        </Container>
      </>
    );
  }
}

export default NewHome;
