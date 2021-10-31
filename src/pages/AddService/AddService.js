import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data =>{ 
      console.log(data);
      
      axios.post('http://localhost:5000/products', data)
      .then(result =>{
          if(result.insertedId){
             alert('order processed Successfully')
             reset();
          }
      } )
    }
    return (
       <Container className="mb-5">
           <h3 className="m-5">Add A New Service</h3>
           <br />
           <br />
           
        <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
           <br />
           <br />
          <textarea {...register("about")} placeholder="Description"/>
           
          <br />
          <br />
          <input type="number" {...register("price")} placeholder="Price"/>
           <br />
           <br />
          <input {...register("url")} placeholder="Image URL" />
          <br />
          <br />
          <br />
                <input   type="submit" />

       </form>
       <p className="m-5">We will never sell your data</p>
         <p className="m-5">Your Data will Be Protected</p>
       </Container>
    );
};

export default AddService;