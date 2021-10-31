import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeliveryServices = (props) => {
     const {name, picture, about,price, _id} = props.serve;
    return (
        <Container>
           
           <Row  xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                <Card className="mt-3">
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>price:$ {price}</p>
                    <Link to={`/myOrders/${_id}`}><Button className="btn btn-primary">Book: {name} </Button>
                    </Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
       </Row>
            
        </Container>
    );
};

export default DeliveryServices;