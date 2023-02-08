import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//

const Menu = () => {
  return (
  <Navbar bg="dark" variant="dark">
  <Container className="justify-content-center">
    <Navbar.Brand>Pokemon</Navbar.Brand>
    <Link to="/" className="text-white ms-3 text-decoration-none">
         Home
    </Link>
    <Link to="/pokemones" className="text-white ms-3 text-decoration-none">
         Pokemones
    </Link>
    <Link to="/login" className="text-white ms-3 text-decoration-none">
          Login
    </Link>
  </Container>
</Navbar>


    )
}

export default Menu