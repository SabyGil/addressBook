import React from "react";
import AddressBook from './AddressBook';
import { Button, FormGroup, Label, Input, Form  } from 'reactstrap';

//class based Parent component
class AddContact extends React.Component {
  constructor(){
    super();
      this.state= {
        newInput: ''
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleClick (event){
    event.preventDefault(event);

    this.setState({
      // name: event.target.name,
      // number: event.target.number,
      // address: event.target.address
      newInput: ''
    });
  }

  handleChange (event) {
    this.setState({
      newInput: event.target.value
    });
  }

  handleUpdate(change){
  this.setState({
    tasks: this.state.tasks.map(task => task === change[0] ?
            // transform the one with a matching name
            change[1]  :
            // otherwise return original task
            task
          )
    })
  }
  // handleUpdate (event) {
  //   this.setState({
  //     newInput = event.target.value
  //
  //   })
  // }

  //need handleChange func
  //need handleClick.bind so this contect won't get lost

// We are rendering the AddressBook Child Component

  render(){
    let contactItem;
    if(this.props.info){
      contactItem = this.props.info.map(item => {
        // console.log(item);
        return (
          <AddressBook key={item.name} item={item} />
        );
      });
    }
// debugger
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
              // value= {this.props.info[0].name}
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
              // value= {this.state.number}
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
              // value={ this.state.address }
              onChange={ this.handleChange }
             />
         </FormGroup>
         <Button onClick={this.handleClick}> Submit </Button>
        </Form>
        <br />

          {contactItem}

      </div>
    );
  }
}

export default AddContact;
