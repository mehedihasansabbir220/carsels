import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Brand.css'

const Brand = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`https://car-sels.herokuapp.com/brand`, {
            "method": 'POST',
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Dear Adim Thanks to Add New Brand ')
                }
                /*  console.log(data); */
            })
    };

    console.log(watch("example"));
    return (
        <>
            <h1> Brand   </h1>
            <form className='body-type' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="Please Image Url" {...register("images")} />
                <br />
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("name", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <select {...register("CarType")}>
                    <option value="bodyType">BodyType</option>
                    <option value="Brand">Brand</option>
                </select>
                <br />
                <Button type="submit">Add A new Car Brand</Button>
                {/*  <input type="submit" /> */}
            </form>
        </>
    );
};

export default Brand;