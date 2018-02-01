import React from "react";
import AddressBook from './Contact';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


//class based Parent component
class Contacts extends React.Component {


  render(){
    // let contacts = this.props.contacts.map((contact, index) => {
    //   return <li key={index}> {contact} </li>
    // });
    // let contacts = this.state.contacts;
    const contacts = this.props.contacts.map((contact, index) => <AddressBook key={index} contact={contact} />)

// debugger
    return (
      <div>
        {contacts}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  };
};

export default connect(mapStateToProps)(Contacts);
