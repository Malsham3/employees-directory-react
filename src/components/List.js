import React from "react";
import Table from "react-bootstrap/Table";

function List({ list }) {
  return (
    // <ListGroup>
    //   {list.map((item) => (
    //     <ListGroup.Item >
    //       <h1>{item.name}</h1>
    //     </ListGroup.Item>
    //   ))}
    // </ListGroup>

    //map over data.results
    //first name = name.first
    //last name = name.last
    //email = email 
    //phone = phone


<Table striped bordered hover>
<thead>
  <tr>
    <th>Photo</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>602</td>
  </tr>
</tbody>
</Table>
  );
}

export default List;





