import React from 'react';
import { Table } from 'reactstrap';

class AddressBook extends React.Component {
  // console.log('this is the props from the parent', property)
  render(){
    //debugger
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default AddressBook;
