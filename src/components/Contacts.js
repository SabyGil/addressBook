import React from "react";
import AddressBook from './Contact';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


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
      this.handleDelete = this.handleDelete.bind(this);
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





  render(){

    let contacts = this.props.contacts.map((contact, index) => {
      return <li key={index}> {contact} </li>
    });
    // let contacts = this.state.contacts;

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

        {/* {contacts.map((contact, index) => {
          return <AddressBook key={index} contact={contact}/>
        })} */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  };
};

// export default AddContact;
export default connect(mapStateToProps)(AddContact);
