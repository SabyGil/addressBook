import React from 'react';
import { Table , Button } from 'reactstrap';
import { connect } from "react-redux";

class AddressBook extends React.Component  {
  handleDelete(e) {
    e.preventDefault();

    this.props.dispatch({
      type: 'DELETE_CONTACT',
      contact: this.props.contact,
      id: this.props.contact.id
    })
  }
  render(){
    return (
      <div>
      <Table bordered>
        <thead>
          <tr>
            <th> row </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>#</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{this.props.contact.id}</th>
            <td>{this.props.contact.firstName}</td>
            <td>{this.props.contact.lastName}</td>
            <td>{this.props.contact.number}</td>
            <td>{this.props.contact.address}</td>
            <td><Button onClick={ (event) => this.handleDelete(event) }> Delete</Button></td>

          </tr>
        </tbody>
      </Table>
    </div>
    );
  }
}
export default connect(undefined)(AddressBook);
