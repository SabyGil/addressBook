import React from "react";
import AddressBook from './AddressBook';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
  }


  handleChange(e) {
    e.preventDefault(e);
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  addContact(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: {
        firstName:this.state.firstName,
        lastName: this.state.lastName,
        number: this.state.number,
        address: this.state.address
      },
    });
  }

  render(){

// debugger
    return (
      <div>
        <h1>Add Contact</h1>
          <Form onSubmit={this.addContact.bind(this)}>
           <FormGroup className="FormGroup">
             <Label for="firstName">Firstname: </Label>
             <Input
                name="firstName"
                type="text"
                ref="firstName"
                placeholder="name"
                value= {this.state.firstName}
                onChange={ this.handleChange }
            />
            <Label for="lastName">Lastname: </Label>
            <Input
               name="lastName"
               type="text"
               ref="lastName"
               placeholder="name"
               value= {this.state.lastName}
               onChange={ this.handleChange }
           />
           </FormGroup>
           <FormGroup>
             <Label for="Number">Number: </Label>
             <Input
                name="number"
                type="Number"
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
                placeholder="101 Park ave..."
                value={ this.state.address }
                onChange={ this.handleChange }
               />
           </FormGroup>
           <Button className="Button" type="submit">Add New Contact</Button>
          </Form>
          <br />
      </div>
    );
  }
}

export default AddContact;
