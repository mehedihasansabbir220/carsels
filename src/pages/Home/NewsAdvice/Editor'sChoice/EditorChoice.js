import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const EditorChoice = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='text-start my-3'>
            <h2>Editor's Choice </h2>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/pPKnjJX/pexels-photo-1149137.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start'>
                                        <h3>Subaru Soltera to be revaled on November 17 </h3>
                                        <p>Japanese brand’s first EV teased for the final time before all-new electric SUV debuts next week</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/qrJL39j/pexels-photo-1335077.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start'>
                                        <h3>Polestar 2 2021 Review </h3>
                                        <p>Polestar looks to shake up the fast-growing EV scene with its headline-grabbing Polestar 2.</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>

                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/9qBT2FM/pexels-photo-1007410.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start mb-auto'>
                                        <h3>Volkswagen Tiguan — What you need to know </h3>
                                        <p>A range revision introduces markedly improved specifications for Volkswagen’s mid-size SUV</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/nL9Kp96/pexels-photo-1035108.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start mb-auto'>
                                        <h3>Mazda CX-50 debut locked in </h3>
                                        <p>Covers to come off all-new small SUV from Mazda in the US on November 15</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/SJ6TwjQ/pexels-photo-1075947.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start mb-auto'>
                                        <h3>2017 Mazda CX-5 Maxx Sport KF Series Auto FWD</h3>
                                        <p>
                                            KF Series Maxx Sport Wagon 5dr SKYACTIV-Drive 6sp FWD 2.0i [Feb]</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/8Mm3P9d/pexels-photo-1131575.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start mb-auto'>
                                        <h3>2018 Mazda CX-5: Range Review </h3>
                                        <p>We pass the new CX-5 around the road test department to see what the team thinks of Mazda’s updated family-sized SUV</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/BzZZtLQ/pexels-photo-1134857.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start mb-auto'>
                                        <h3>Honda CR-V v Mazda CX-5 2017 Comparison </h3>
                                        <p>The latest version of the original lifestyle SUV takes on the current favourite... see who takes the prize</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img
                                    className="d-block w-100"
                                    src={`https://i.ibb.co/5Bsx3LC/pexels-photo-1149056.jpg`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className='text-start mb-auto '>
                                        <h3>2011 Nissan Elgrand Highway Star PE52 Auto </h3>
                                        <p>2011 imported Nissan Elgrand highway star E52..</p>
                                    </div>
                                </Carousel.Caption>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};


export default EditorChoice;