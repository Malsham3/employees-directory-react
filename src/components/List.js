import React from "react";
import Table from "react-bootstrap/Table";

function List({ list }) {
  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>

        {list.map(({ picture, name, email, phone, id }) => (
        <tr key={id.value}>
          <td>
            <img
            src = {picture.large}
            alt = {`${name.first}'s profile picture`}
            />
          </td>
          <td>{name.first} {" "} {name.last}</td>
          <td>
            <a href= {"mailto:" + email} target= "__blank">{email}</a>
          </td>
          <td>{phone}</td>
        </tr>
        ))}

      </tbody>

    </Table>
  )
}

export default List;
