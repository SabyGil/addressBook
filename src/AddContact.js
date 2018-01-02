import React from "react";
import AddressBook from './AddressBook';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

//class based Parent component
class AddContact extends React.Component {
  constructor(){
    super();
      this.state= {
        contacts: [],
        firstName: '',
        lastName: '',
        number: '',
        address:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleDelete = this.handleDelete.bind(this)

  }


  handleChange(e) {
    e.preventDefault(e);
    const target = e.target;
    const x = target.name;
    this.setState({
      [x]: target.value
    });
  }

  addContact(e){
    e.preventDefault();

    this.setState({
      contacts: this.state.contacts.concat({
        firstName:this.state.firstName,
        lastName: this.state.lastName,
        number: this.state.number,
        address: this.state.address
      }),
      firstName: '',
      lastName: '',
      number: '',
      address: ''

    });
  }

  handleDelete(e){
   this.setState({
     contacts: this.state.contacts.filter( (contact) => contact !== e)
   })
 }


  render(){
    let contacts = this.state.contacts;

    return (
      <div>
      <h1>Add Contact</h1>
        <Form onSubmit={this.addContact.bind(this)}>
         <FormGroup className="FormGroup">
           <Label for="firstName">Firstname: </Label>
           <Input
              name="firstName"
              type="text"
              placeholder="firstname"
              value= {this.state.firstName}
              onChange={ this.handleChange }
          />
          <Label for="lastName">Lastname: </Label>
          <Input
             name="lastName"
             type="text"
             placeholder="lastname"
             value= {this.state.lastName}
             onChange={ this.handleChange }
         />
         </FormGroup>
         <FormGroup>
           <Label for="Number">Number: </Label>
           <Input
              name="number"
              type="Number"
              ref="number"
              placeholder="347..."
              value= {this.state.number}
              onChange={ this.handleChange }
           />
         </FormGroup>
         <FormGroup>
           <Label for="Address">Address: </Label>
           <Input
              name="address"
              type="address"
              ref="address"
              placeholder="101 Park ave..."
              value={ this.state.address }
              onChange={ this.handleChange }
             />
         </FormGroup>
         <Button className="Button" type="submit">Add New Contact</Button>
        </Form>
        <br />
        {contacts.map((contact, index) => {
          return <AddressBook key={index} contact={contact} del={this.handleDelete}/>
        })}

      </div>
    );
  }
}

AddContact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired
}

export default AddContact;
