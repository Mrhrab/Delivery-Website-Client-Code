import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    // const [orders, setOrders] = useState({});
    // useEffect(()=>{
    //     fetch('https://howling-dungeon-90512.herokuapp.com/orders')
    //     .then(res=> res.json())
    //     .then(data => setOrders(data))
    // }, [])
    return (
        <div>
            <h1>manage oder</h1> 
        {/* {
            orders.map(order=> <div key={order._id}>
                <h2>{order.name}</h2>
                <button className="btn btn-primary">Delete</button>

            </div> )
        } */}
        </div>
    );
};

export default ManageOrder;