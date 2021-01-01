import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NonIndexNav = () => {
  return (
    <Navbar collapseOnSelect={true} bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/Sithum/#/">Sample Text</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Events" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Sithum/#/hack">Hackathon</NavDropdown.Item>
            <NavDropdown.Item href="/Sithum/#/code">
              Coding Contest
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NonIndexNav;
