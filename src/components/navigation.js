import React from "react";
import { Link } from "react-scroll";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      bg: "",
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const bg = window.scrollY < 100 ? "none" : "light";
      this.setState({ bg: bg });
    });
  }
  render() {
    return (
      <Navbar
        collapseOnSelect={true}
        bg={this.state.bg}
        expand="lg"
        fixed="top"
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Navbar.Brand>Sample Text</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link href="#!">About</Nav.Link>
            </Link>
            <NavDropdown title="Events" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Sithum/#/hack">
                Hackathon
              </NavDropdown.Item>
              <NavDropdown.Item href="/Sithum/#/code">
                Coding Contest
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link href="#!">Contact</Nav.Link>
            </Link>
            <Nav.Link href="/Sithum/#/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
