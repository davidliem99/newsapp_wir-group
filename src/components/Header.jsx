import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          fixed="top"
        >
          <Navbar.Brand href="/">{this.props.navBrand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Teknologi</Nav.Link>
              <Nav.Link href="/business">Bisnis</Nav.Link>
              <Nav.Link href="/health">Kesehatan</Nav.Link>
              <Nav.Link href="/entertainment">Entertainment</Nav.Link>
              <Nav.Link href="/sports">Olahraga</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
