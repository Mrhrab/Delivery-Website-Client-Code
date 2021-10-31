import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        
     <>
      <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Fast React Delivery++</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {user.email && <h5>Hello!! {user.displayName}</h5>}
                <Nav.Link as={Link} to ="/home#home">Home</Nav.Link>
                <Nav.Link as={Link} to ="/deliveries#delivery">Delivery Services</Nav.Link>
                <Nav.Link as={Link} to ="/myOrders/:serveKey">place Order</Nav.Link>
                {user.email? <Nav.Link as={Link} to ="/manageOrder">Manage Order</Nav.Link>: ''}
                {user.email?<Nav.Link as={Link} to ="/addService">Add Service</Nav.Link>: ''}
                <Nav.Link as={Link} to ="/aboutUs#about">About Us</Nav.Link>
               {
                    user.email ?
                    <span><button onClick={logOut} className="btn btn-secondary"> Log out</button></span>
                    : 
               <Nav.Link as={Link} to ="/login#log">Google Login</Nav.Link>}
                <Nav.Link as={Link} to ="/reviews#services">Customer Reviews</Nav.Link>
               
               
            </Nav>
            </Navbar.Collapse>
        </Container>
     </Navbar>
    </>
       
    );
};

export default Header;