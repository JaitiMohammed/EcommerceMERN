import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo/Logo.png";
const Header = () => {
  return (
    <header>
      <Navbar
        className='background_nav'
        expand='lg'
        variant='dark'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='Logo Butterfuly' width='220' />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
