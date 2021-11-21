import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {

    return (
        <div className='hero-image d-flex flex-column bd-highlight mb-3 align-items-center justify-content-center'>
            <h4 style={{ color: 'white' }}>Find your next car </h4>
            <h6>
                <Button className='m-3 p-2' variant="success">Show All Cars </Button>
            </h6>
        </div>
    );
};

export default Banner;