import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Alert, Container, Form } from 'react-bootstrap';
import Banner from './Banner/Banner';
import HomeService from './HomeService';

const Home = () => {
    return (
        <div id="home">
           <Banner></Banner>
           <HomeService></HomeService>
           <Container>
               <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    White glove delivery provides final-mile shipments with exceptional service. This is due to a more hands-on approach to the handling and transportation of the product into an office space, facility, warehouse, construction site, or home. Trained handling specialists can custom pack the sensitive products, load and unload the package with care, perform light assembly, and remove any left-over debris. These individuals will always drive company branded vehicles and wear a professional uniform and an ID badge. By providing your customers with a white glove delivery service, you’ll exceed their expectations and build a trustworthy relationship.In today’s fast-paced society, customers want to know where their package, letter, or parcel is and the estimated arrival time. White glove delivery ensures customers that their package is handled with care through each step of the delivery process. Each package is given a unique tracking code that monitors its movement and location. This allows supply chai
                </p>
                <hr />
                <p className="mb-0">
                    Couriers will also notify the customer when the package will arrive to ensure the individual is there to sign for it and direct the courier to the best location to place it down and unbox it.
                </p>
                </Alert>
               <Alert variant="success">
                <Alert.Heading>We Are here To help!!!</Alert.Heading>
                <p>
                    In today’s fast-paced society, customers want to know where their package, letter, or parcel is and the estimated arrival time. White glove delivery ensures customers that their package is handled with care through each step of the delivery process. Each package is given a unique tracking code that monitors its movement and location. T In today’s fast-paced society, customers want to know where their package, letter, or parcel is and the estimated arrival time. White glove delivery ensures customers that their package is handled with care through each step of the delivery process. Each package is given a unique tracking code that monitors its movement and location. T
                </p>
                <hr />
                <p className="mb-0">
                    Visit Econo-Courier online and see what kinds of options work best for your shipping needs. To schedule a pick-up, delivery, or warehousing service, get in touch with us at:
                </p>
                </Alert>
                            <h1>write to Us</h1>
                <Form className="mb-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Subscribe TO OFFERS" />
                    </Form.Group>
                    <Button className="btn btn-primary" type="submit">
                        Submit
                    </Button>
                    </Form>
           </Container>

        </div>
    );
};

export default Home;