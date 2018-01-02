import React from 'react';
import { Table } from 'reactstrap';

class AddressBook extends React.Component {
  handleDeleteClick(e){
    this.props.del(this.props.contact)
  }
  render(){
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
            <td>{this.props.contact.firstName}</td>
            <td>{this.props.contact.lastName}</td>
            <td>{this.props.contact.number}</td>
            <td>{this.props.contact.address}</td>
            <td><button onClick={ (event) => this.handleDeleteClick(event) }>Delete</button></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default AddressBook;
