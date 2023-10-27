// src/components/HomePage.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css'

const HomePage: React.FC = () => {
    return (
      <div className="homepage-container">
        <Navbar bg="dark" variant="dark" className="fixed-top">
          <Container>
            <Navbar.Brand href="#">cryptoAid</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  
        <div className="centered-content">
          <h1 className="homepage-title">Welcome to cryptoAid</h1>
        </div>
      </div>
    );
  };
  
export default HomePage;
