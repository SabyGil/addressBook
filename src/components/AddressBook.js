import React from 'react';
import { Table } from 'reactstrap';

class AddressBook extends React.Component {
    //debugger
    handleClick(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
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
            <th scope="row">1</th>
            <td>{this.props.contact.firstName}</td>
            <td>{this.props.contact.lastName}</td>
            <td>{this.props.contact.number}</td>
            <td>{this.props.contact.address}</td>
            <button onClick={(event) => this.handleClick(event)}>Delete</button>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default AddressBook;
