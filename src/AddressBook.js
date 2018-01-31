import React from 'react';
import { Table } from 'reactstrap';

const AddressBook = ({contact}) => {
  // console.log('this is the props from the parent', property)
    //debugger
    return (
      <Table>
        <thead>
          <tr>
          <th>First Name</th>
            <th>Last Name</th>
            <th>#</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.number}</td>
            <td>{contact.address}</td>
          </tr>
        </tbody>
      </Table>
    );
}

// export default AddressBook;
