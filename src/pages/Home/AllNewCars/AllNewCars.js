import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const AllNewCars = () => {
    const { user } = useAuth()
    const [newCar, setNewCar] = useState([])
    useEffect(() => {
        fetch(`https://car-sels.herokuapp.com/newCar`)
            .then(res => res.json())
            .then(data => {
                setNewCar(data);
            })
    }, []);
    const handleAddtoCart = (data) => {
        const email = user.email
        data.email = email
        fetch(`https://car-sels.herokuapp.com/order`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('thanks for Your Order ')
                }
            })
        console.log(data);
    }
    console.log(newCar);
    return (
        <>
            <Container>
                <h2>All New Car Here</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        newCar.map(car => <div className="col-sm-1 col-md-3 col-lg-4"
                            key={car._id}
                        >
                            <div className="card">
                                <img src={car.image} className="card-img-top w-100" />
                                <div className="card-body">
                                    <h5 className="card-title">{car.name} </h5>
                                    <h5 className="card-title">Price : $ {car.price} </h5>
                                    <p className="card-text">{car.description} </p>
                                    <br />
                                    <button onClick={() => handleAddtoCart(car)} className='btn btn-info m-2 p-2'>Add to Cart </button>
                                </div>
                            </div>
                        </div>)
                    }

                </div>

            </Container>


        </>
    );
};

export default AllNewCars;