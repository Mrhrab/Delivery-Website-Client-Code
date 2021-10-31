import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <h1 className="not-found">404 not found</h1>
            <Link to="/home">Return Home</Link>
        </Container>
            
        
    );
};

export default NotFound;