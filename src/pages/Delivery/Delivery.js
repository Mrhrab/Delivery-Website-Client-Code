import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DeliveryServices from './DeliveryServices';

const Delivery = () => {
    const [service, setService] =useState([])
    useEffect(() => {
        fetch('https://howling-dungeon-90512.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
       
            <div className="container">
                {
                service.map( serve=> <DeliveryServices
                key={serve._id}
                serve={serve}
                ></DeliveryServices>)
                }
            </div>     

          
     
    );
};

export default Delivery;