import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavStyle
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand to="/">AddressBook Lab</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Nav className="ml-auto" navbar>
       <NavItem>
         <NavLink exact to="/"><NavStyle>Home</NavStyle></NavLink>
       </NavItem>
       <NavItem>
         <NavLink to="/addressbook"><NavStyle>Contact List</NavStyle></NavLink>
       </NavItem>
       </Nav>
      </Navbar>
    </div>
  );
}
