import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/addanorder', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Order has been added successfully');
                    reset();
                }
            })
    };

    const { orderId } = useParams();
    const [order, setOrder] = useState({});

    ////
    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${orderId}`)
    //         .then(res => res.json())
    //         .then(data => setOrder(data));
    // }, [])
    ////
    useEffect(() => {
        fetch(`https://chilling-hollow-32080.herokuapp.com/services/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])



    return (
        <div>
            <h2 className="mt-5">Hello <span className="text-success">{user.displayName}</span></h2>
            <h3>Email: <span className="text-success">{user.email}</span></h3>
            <h4>Your order ID is: {orderId} </h4>
            <h3>Destination: {order.name}</h3>
            <p className="mt-5">Please type in your details below:</p>

            <form className="placeorder-form" onSubmit={handleSubmit(onSubmit)}>

                {/* register your input into the hook by invoking the "register" function */}
                {/* <input defaultValue={user.displayName} {...register("name")} /> */}

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input defaultValue={user.email} {...register("email", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.email && <span className="error">This field is required</span>} */}

                <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                {errors.address && <span className="error">This field is required</span>}

                <input placeholder="Phone" defaultValue="" {...register("phone", { required: true })} />
                {errors.phone && <span className="error">This field is required</span>}

                <input className="btn btn-warning" type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default PlaceOrder;