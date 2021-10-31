import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {serveKey} = useParams();
    const [service, setService] = useState({});

    const { user }=useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
     fetch('https://howling-dungeon-90512.herokuapp.com/orders', {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
        if(result.insertedId){
            alert('Order processed Successfully');
            reset();
        }
    } )
}

  
    useEffect(()=>{
        fetch( `https://howling-dungeon-90512.herokuapp.com/${serveKey}`)
        .then(res=> res.json())
        .then(data => setService(data));
    },[])
    return (
        <Container >
            <h3 className="m-5">Service Name: {service.name}</h3>
            <h3 className="m-5">Service ID: {service._id}</h3>
                <p><big>Description</big> : {service.about}</p>
                <br />
                <p><span className="text-danger">Note:</span> To confirm copy paste order <span className="text-danger">ID</span> from top of this page in the box below.</p>

         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 } )} defaultValue={user ? user.displayName : ''} className="m-2"/>
                <br /><br />
            <input  {...register("email", )} defaultValue={user ? user.email : ''} className="m-2"/>
            <br /><br />
            <input type="text" {...register("id")} placeholder="Put Order id here" className="m-2"/>
            <br /><br />
            <input type="text" {...register("address")}  placeholder="address"/>
            <br /><br />
            <input type="number" {...register("phone")} placeholder="Phone"/>
            <br /><br />
            <input className="btn btn-danger" type="submit" />
        </form>
             
        </Container>
    );
};

export default MyOrders;