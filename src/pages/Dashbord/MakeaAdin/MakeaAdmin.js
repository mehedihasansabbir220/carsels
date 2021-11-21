import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const MakeaAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://car-sels.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.email) {
                    alert('admin was create')
                }
            })
    };
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center "
                style={{ minHeight: "80vh" }}>
                <div className="w-100 " style={{ maxWidth: "400px" }}>
                    <Card className='bg-info text-light'>
                        <Card.Body>
                            <h2 className="text-center mb-4">Add A New Admin </h2>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="w-100 my-2 p-2" placeholder='Enter Email ' type='email' {...register("email")} required />
                                <Button className="w-100 bg-info" type="submit">
                                    Add A New Admin
                                </Button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>

            </Container>
        </>
    );
};

export default MakeaAdmin;