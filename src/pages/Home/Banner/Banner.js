import React from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
           
                <Card className="bg-dark text-white mb-5">
                    <Card.Img className="w-100vh h-100vh " src="https://i.ibb.co/r0kZXgj/img-banner.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title ><h1><big>Fastest Delivery Worldwide</big></h1></Card.Title>
                        <Card.Text className="text-primary">
                        Delhivery’s aim is to build the operating system for commerce. We provide express parcel transportation, PTL and TL freight, cross-border and supply chain services to over 21000 customers, including large & small e-commerce participants, SMEs, and other leading enterprises & brands. Our supply chain platform and logistics operations bring flexibility, breadth, efficiency and innovation to our customers’ supply chain and logistics. Our operations, infrastructure and technology enable our customers to transact with us and our partners at low costs.
                        </Card.Text>
                        
                    </Card.ImgOverlay>
                    </Card>
           
        </div>
    );
};

export default Banner;