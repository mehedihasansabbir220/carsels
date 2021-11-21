import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='container my-3'>
                <div className="row">
                    <div className="col text-start">
                        <h5>Cars for sale</h5>
                        <p >
                            <Link to='/' style={{ textDecoration: 'none' }}>Used cars for sale</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>New cars for sale</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Deals</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Compare Cars</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Instant Offer</Link>

                        </p>
                    </div>
                    <div className="col text-start">
                        <h5>New Cars</h5>
                        <p>
                            <Link to='/' style={{ textDecoration: 'none' }}>Brand new cars</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Explore by type</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Explore by brand</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Latest Offers</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Certified Pre-Owned</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Tradie hub</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Family hub</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Electric hub</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Adventure hub</Link>
                        </p>
                    </div>
                    <div className="col text-start">
                        <h5>Car Research</h5>
                        <p>
                            <Link to='/' style={{ textDecoration: 'none' }}>Research Cars</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Valuations</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Comparisons</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Inspection</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>carsales FACTS+</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Finance</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>For Owners</Link>
                            <br />
                        </p>
                    </div>
                    <div className="col text-start">
                        <h5>News & Reviews</h5>
                        <p>
                            <Link to='/' style={{ textDecoration: 'none' }}>Car News</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Reviews</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Videos</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Car Advice</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>New Car Calendar</Link>
                            <br />
                        </p>
                    </div>
                    <div className="col text-start">
                        <h5>Other Sites</h5>
                        <p>
                            <Link to='/' style={{ textDecoration: 'none' }}>Discount New cars</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Bikes</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Boats</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Trucks</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Caravans</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Farm Machinery</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Construction</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Tyresales </Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Soloautos</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Chileautos</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Webmotors</Link>
                        </p>
                    </div>
                    <div className="col text-start">
                        <h5>General Help</h5>
                        <p>
                            <Link to='/' style={{ textDecoration: 'none' }}>Terms & Conditions</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Privacy</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Contact Us</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>About Us</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Sitemap</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Careers</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Corporate Advertising</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Dealer Advertising</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Competitions</Link>
                            <br />
                            <Link to='/' style={{ textDecoration: 'none' }}>Shareholders</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-info mt-3 p-3 text-center'>
                <p>@carsale Limited 2021
                </p>
                <h3>
                    <i className="fab fa-facebook"> </i>
                    <i className="fab fa-twitter-square mx-3"> </i>
                    <i className="fab fa-youtube"> </i>
                    <i className="fab fa-instagram-square mx-3"> </i>
                </h3>
            </div>
        </>
    );
};

export default Footer;