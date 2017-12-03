import React from 'react';
import { Table } from 'reactstrap';

export default function AddressBook(property){
  console.log('this is the props from the parent', property)
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
            <td>{property.name}</td>
            <td>{property.number}</td>
            <td>{property.address}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
