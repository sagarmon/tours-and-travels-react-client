import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddAService.css';

const AddAService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://chilling-hollow-32080.herokuapp.com/addaservice', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Service has been added successfully');
                    reset();
                }
            })
    };

    return (
        <div className="addaservice-form mt-5">
            <h2>Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="" placeholder="Service Name" {...register("name", { required: true })} />

                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="Description" {...register("description", { required: true })} />
                <input placeholder="Image Link" {...register("img", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-warning" type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddAService;