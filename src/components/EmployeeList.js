import React from "react";

class EmployeeList extends React.Component {
    state = {
        details: {}
    }

    componentDidMount() {
        this.getAllEmployees();
    }

    getAllEmployees = () => {
        fetch("https://randomuser.me/api/?results=50")
        .then((data) => data.json())
        .then((data) => console.log(data))
    }

    render() {
        return (
            <h1>Hello</h1> //look at console. see how you can retrieve and display data
        )
    }
}

export default EmployeeList;