import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [myOrdrs, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://car-sels.herokuapp.com/myorder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
                // console.log(data);
            })
    }, [myOrdrs])
    console.log(myOrdrs);
    const handleDelet = (data) => {
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
    return (
        <>
            <Container>
                <h4>Your Total Order {myOrdrs.length}</h4>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        myOrdrs.map(order => <div class="col-md-3 clo-1 col-lg-4"
                            key={order._id}
                        >
                            <div class="card h-100">
                                <img src={order.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{order.name}</h5>
                                    <p class="card-text">{order.description}</p>
                                </div>
                                <Link to='/userOrder' >
                                    <button className='btn btn-danger m-2 p-2 '>Place order</button>
                                </Link>
                                <button onClick={() => handleDelet(order)} className='btn w-100 btn-warning m-2 p-2 '>Dlete Order</button>
                            </div>
                        </div>)
                    }
                </div>

            </Container>

        </>
    );
};

export default MyOrder;