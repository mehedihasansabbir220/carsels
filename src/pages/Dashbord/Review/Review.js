import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    console.log(user);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://car-sels.herokuapp.com/reviews`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('thanks For Your Review ')
                }
                // console.log(data);
            })
        // console.log(data)
    };
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center "
                style={{ minHeight: "80vh" }}>
                <div className="w-100 " style={{ maxWidth: "400px" }}>
                    <Card className=' text-dark'>
                        <Card.Body>
                            <h2 className="text-center mb-4">Add A New Product Reviews </h2>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Label className='my-3 text-center'>Name</Form.Label>
                                <input className="w-100 my-2 p-2 text-light bg-dark" value={user?.displayName} {...register("name")} />
                                <Form.Label className='my-3 text-center'>Email</Form.Label>
                                <input value={user?.email} className="w-100 my-2 p-2 bg-dark text-light"  {...register("email")} />
                                <Form.Label className='my-3 text-center'>Enter Your Car Name </Form.Label>
                                <input className="w-100 my-2 p-2 text-dark"  {...register("carname")} />

                                <label for="exampleFormControlTextarea3">Enter Your Reviews Here </label>
                                <textarea type='text' className="form-control my-3 p-2" id="exampleFormControlTextarea3" rows="7" {...register("reviews")}></textarea>
                                <label for="exampleFormControlTextarea3">Enter Your Reviews Reating Out Of 5 </label>
                                <input type="number" {...register("reating", { min: 1, max: 5 })} />
                                <button className="w-100 btn btn-info my-2" type="submit">
                                    Add Product Rewis
                                </button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>

            </Container>
        </>
    );
};

export default Review;