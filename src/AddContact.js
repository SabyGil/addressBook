import React from "react";
import AddressBook from './AddressBook';
import { Button, FormGroup, Label, Input, Form  } from 'reactstrap';

//class based Parent component
class AddContact extends React.Component {
  constructor(){
    super();
      this.state= {
        contacts: []
      };
      // this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    e.preventDefault(e);
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      number: e.target.value,
      address: e.target.value
    });
  }

  addContact(e){
    e.preventDefault();
    let firstName = this.refs.firstName.value;
    let lastName = this.refs.lastName.value;
    let number = this.refs.number.value;
    let address = this.refs.address.value;

    // let id = Math.floor((Math.random() * 100) + 1);
    // console.log(this.refs.name.value);
    this.setState({
      contacts: this.state.contacts.concat({ firstName, lastName, number, address })
    });
    this.refs.firstName.value = '';
    this.refs.lastName.value = '';
    this.refs.number.value = '';
    this.refs.address.value = '';
  }

  // handleUpdate(change){
  // this.setState({
  //   tasks: this.state.tasks.map(task => task === change[0] ?
  //           // transform the one with a matching name
  //           change[1]  :
  //           // otherwise return original task
  //           task
  //         )
  //   })
  // }

// We are rendering the AddressBook Child Component

  render(){

    // let filteredContacts = this.state.contacts.filter((contact) => {
    //     return contact.firstName.indexOf(this.state.contacts) !== -1;
    //   }
    // );
    // let contacts = this.state.contacts.map((contact, index) => {
    //   return <AddressBook key={index} contact={contact}/>
    // });
    let contacts = this.state.contacts;

// debugger
    return (
      <div>
      <h1>Add Contact</h1>
        <Form onSubmit={this.addContact.bind(this)}>
         <FormGroup>
           <Label for="firstName">Firstname: </Label>
           <Input
              type="text"
              ref="firstName"
              placeholder="name"
              value= {this.state.firstName}
              onChange={ this.handleChange }
          />
          <Label for="lastName">Lastname: </Label>
          <Input
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
              type="address"
              ref="address"
              placeholder="101 Park ave..."
              value={ this.state.address }
              onChange={ this.handleChange }
             />
         </FormGroup>
         <Button type="submit">Add New Contact</Button>
        </Form>
        <br />

        {contacts.map((contact, index) => {
          return <AddressBook key={index} contact={contact}/>
        })}


      </div>
    );
  }
}

export default AddContact;
