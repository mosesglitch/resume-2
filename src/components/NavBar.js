import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navo">
        <Navbar bg="dark" expand="lg" variant={"dark"}>
          <Container fluid>
            <Navbar.Brand href="#">Moses G Wachira</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/experience">
                  Experience
                </Nav.Link>
                <Nav.Link as={Link} to="/academics">
                  Academics
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  Projects
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
