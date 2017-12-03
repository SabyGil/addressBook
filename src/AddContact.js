import React from "react";
import AddressBook from './AddressBook';
import { Button, FormGroup, Label, Input, Form  } from 'reactstrap';

//class based Parent component
class AddContact extends React.Component {
  constructor(props){
    super(props);
      this.state= {
        name: 'Heriberto',
        number: '203.752.8089',
        address: '1817 Purdy'
      }

  }

  handleClick (event){
    event.preventDefault(event);

    this.setState({
      name: event.target.name,
      number: event.target.number,
      address: event.target.address
    });
  }

// We are rendering the AddressBook Child Component
  render(){
    return (
      <div>
      <h1>Add Contact </h1>
        <Form>
         <FormGroup>
           <Label for="Name">Name: </Label>
           <Input
              type="text"
              name="name"
              placeholder="with a placeholder"
              value= {this.state.name}
              onChange={ this.handleChange }
          />
         </FormGroup>
         <FormGroup>
           <Label for="Number">Number: </Label>
           <Input
              type="text"
              number="number"
              id="examplePassword"
              placeholder="number placeholder"
              value= {this.state.number}
              onChange={ this.handleChange }
           />
         </FormGroup>
         <FormGroup>
           <Label for="Address">Address: </Label>
           <Input
              type="address"
              address="address"
              id="examplePassword"
              placeholder="address placeholder"
              value={ this.state.address }
              onChange={ this.handleChange }
             />
         </FormGroup>
         <Button
          onClick={this.handleClick}>
            Submit
         </Button>
        </Form>
        <br />

        <AddressBook
          name={this.state.name}
          number={this.state.number}
          address={this.state.address}
        />
      </div>
    )
  }
}

export default AddContact;
