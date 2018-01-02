import React from 'react';
// import { Navbar } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Test extends React.Component {

  render(){

    return (
      <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">AddressBook Lab</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
           <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink href="/">Home</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="/addressbook">Contact List</NavLink>
             </NavItem>
           </Nav>
          </Navbar>
      </div>
    );
  }
}

export default Test;
