import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import accountlog from "../Resouses/account.svg";
import search from "../Resouses/search.svg";
import data from "../Resouses/Courses.json";
import { Link } from "react-router-dom";

const Appbar = () => {
  console.log(data.courses.map((d) => d.name));
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="success"
        variant="dark"
        style={{ boxShadow: "10px 10px 5px grey" }}
      >
        <Container>
          <Navbar.Brand href="/">My Library</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <NavDropdown title="Courses" id="collasible-nav-dropdown">
                {data.courses.map((d) => (
                  <NavDropdown.Item>
                    <Link
                      to={d.link}
                      style={{
                        paddingLeft: 13,
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#198754",
                       
                      }}
                    >
                      {d.name}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Practice" id="collasible-nav-dropdown">
                {data.courses.map((d) => (
                  <NavDropdown.Item>
                    <Link
                      to={d.link}
                      style={{
                        paddingLeft: 13,
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#198754",
                        
                      }}
                    >
                      {d.name}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">
                  <img
                    src={search}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="/login">
                <img
                  src={accountlog}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
