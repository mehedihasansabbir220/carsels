import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch(`https://car-sels.herokuapp.com/addproduct`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Add Product Scuessfully')
                }
            })
    };
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center "
                style={{ minHeight: "80vh" }}>
                <div className="w-100 " style={{ maxWidth: "400px" }}>
                    <Card className='bg-dark text-light'>
                        <Card.Body>
                            <h2 className="text-center mb-4">Add A New Product </h2>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="w-100 my-2 p-2" placeholder='Enter Image Url Link ' type='link' {...register("image")} required />
                                <input className="w-100 my-2 p-2" placeholder='Enter Car Name ' type='name' {...register("name")} required />
                                <input className="w-100 my-2 p-2" placeholder='Enter Car Price ' type='number' {...register("price")} required />
                                <input className="w-100 my-2 p-2" placeholder='Car DesCription ' type='text' {...register("description")} required />

                                <Button className="w-100 bg-info" type="submit">
                                    Add A New Product
                                </Button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>

            </Container>
        </>
    );
};

export default AddAProduct;