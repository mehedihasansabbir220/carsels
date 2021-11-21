import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Header/Header/Header';

const UserOrder = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth()
    const onSubmit = (data) => {
        alert('thanks For your Order')
        console.log(data);
    }
    return (
        <>
            <Header></Header>
            <Container className="d-flex align-items-center justify-content-center my-3 "
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

                                <label for="exampleFormControlTextarea3">Enter Your Address  Here </label>
                                <textarea type='text' className="form-control my-3 p-2" id="exampleFormControlTextarea3" rows="3" {...register("address")}></textarea>

                                <button className="w-100 btn btn-info my-3" type="submit">
                                    Parces Your Order
                                </button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>

            </Container>
        </>
    );
};

export default UserOrder;