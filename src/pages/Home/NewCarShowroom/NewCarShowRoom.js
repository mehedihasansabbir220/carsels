import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewCarShowRoom.css'

const NewCarShowRoom = () => {
    const [newCar, setNewCar] = useState([])
    useEffect(() => {
        fetch(`https://car-sels.herokuapp.com/car`)
            .then(res => res.json())
            .then(data => {
                /* console.log(data); */
                setNewCar(data)
            })
    }, [])
    const handleCar = (name) => {

        // console.log(name);
        // fetch(`http://localhost:5000/car`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setNewCar(data)
        //     })
    }
    // console.log(newCar);
    return (
        <div className='container'>
            <div className='col-md-2 col-sm-1 col-lg-3 showroom'>
                <div className="showroom-header">
                    <h2>New Car Showroom</h2>
                    <nav className='text-muted'>
                        <div className=" active text-primary mx-3">
                            <Button onClick={() => handleCar('body-type')} variant="primary" size="lg" active>
                                Body type
                            </Button>
                            {/* <Button onClick={() => handleCar('brand')} variant="secondary" size="lg" >
                                Brand
                            </Button> */}
                        </div>
                    </nav>
                    <div>
                        <Link to='/allcars'>
                            <h5 className='text-primary text-end'>View All Cars  <i className="fas fa-arrow-right"> </i> </h5>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {
                    newCar.map(car => <div className='col'
                        key={car._id}
                    >
                        <div className="card h-100">
                            <img src={car.images} className="card-img-top w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{car.name}</h5>
                                <p className="card-text">Type : {car.CarType}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NewCarShowRoom;