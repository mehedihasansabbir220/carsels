import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';

const AllCars = () => {
    const { user } = useAuth()
    const [allCars, setAllCars] = useState([]);
    useEffect(() => {
        fetch(`https://car-sels.herokuapp.com/allcars`)
            .then(res => res.json())
            .then(data => {

                setAllCars(data)
            })
    }, [])
    // console.log(allCars);
    const handleCart = data => {
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
    }
    return (
        <>
            <Header></Header>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                {
                    allCars.map((allcar, index) => <div className="col-sm-1 col-md-2 col-lg-3"
                        key={allcar._id}
                    >
                        <div className="card h-100">
                            <img src={allcar.image} className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{allcar.name}</h5>
                                <h5 className="card-title">Price :${allcar.price}</h5>
                                <p className="card-text">{allcar.description}</p>
                                <button onClick={() => handleCart(allcar)} className='btn btn-info'>Add to Cart</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <Footer></Footer>
        </>
    );
};

export default AllCars;