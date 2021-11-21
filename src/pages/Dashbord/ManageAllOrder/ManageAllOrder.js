import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch(`https://car-sels.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllOrders(data)
            })
    }, [allOrders]);
    const handleDelete = data => {
        alert('You want to delete this ')
        fetch(`https://car-sels.herokuapp.com/myorder/${data._id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('delet Prdoduct SucessFully ')
                }
            })
    }
    // console.log(allOrders);
    return (
        <>
            <Container className='text-center'>
                <h5>Total Orders {allOrders.length} </h5>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        allOrders.map(allorder => <div class="col-md-2 col-lg-3 col-sm-1" key={allorder._id}
                        >
                            <div class="card h-100">
                                <img src={allorder.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{allorder.name} </h5>
                                    <p class="card-text">{allorder.description} </p>
                                </div>
                                <button onClick={() => handleDelete(allorder)} className='m-2 p-2 bg-danger'>Delete A product </button>
                            </div>
                        </div>
                        )
                    }
                </div>

            </Container>

        </>
    );
};

export default ManageAllOrder;