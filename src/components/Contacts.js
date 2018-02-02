import React from "react";
import AddressBook from './Contact';
import { connect } from 'react-redux';

//class based Parent component
class Contacts extends React.Component {
  render(){
    const contacts = this.props.contacts.map((contact, index) => <AddressBook key={index} contact={contact} />)
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
