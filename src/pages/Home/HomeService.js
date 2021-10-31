import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeService = () => {
    return (
       <Container>
           <h3 className="mb-5 ">Most Popular Delivery Services</h3>
                    <CardGroup className="mb-5 ">
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/jZY7w1x/img1.jpg" />
                <Card.Body>
                <Card.Title>Food Delivery</Card.Title>
                <Card.Text>
                   The winter spike in orders is unsurprising when you consider the popularity of food delivery and the difficulty of moving around in the cold weather. For restaurants already dealing with the busy holiday period and often struggling to keep up with delivery orders
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/TknXjJQ/img5.jpg" />
                <Card.Body>
                <Card.Title>1H Delivery</Card.Title>
                <Card.Text>
                    Did you know Addison Lee also provides a same day courier service? Our dedicated fleet of bicycles, cars, motorbikes and vans is one of the fastest nationwide. From small parcels to large deliveries, our fleet is at your service.
                </Card.Text>
                </Card.Body>
                
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/VjZPFk2/img4.jpg" />
                <Card.Body>
                <Card.Title>Currier Service</Card.Title>
                <Card.Text>
                    Courier service SrL, based in Piacenza via Toscana 2, operates in the transport and shipping sector, has gained experience and demonstrated reliability by managing the operational branch of DHL from 1992 to 2013.
                </Card.Text>
                </Card.Body>
            </Card>
          </CardGroup>
          <Link to=""> <button className="mb-5 btn btn-primary">Go to Services</button> </Link>
       </Container>
    );
};

export default HomeService;