import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';

const UserReview = () => {
    const [userReview, setUserReview] = useState([])
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    useEffect(() => {
        fetch(`https://car-sels.herokuapp.com/allreviews`)
            .then(res => res.json())
            .then(data => {
                setUserReview(data);
            })
    }, [])
    console.log(userReview);
    return (
        <>
            <Container className='my-3'>
                <h3> User Review </h3>
                <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={2}
                        gutter={20}
                        leftChevron={<button>{'<'}</button>}
                        rightChevron={<button>{'>'}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        {
                            userReview.map(review => <div style={{ height: 200, backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}>
                                <Card className='text-center  ' style={{ backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}>
                                    <Card.Header as="h5"> {review.carname}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{review.reviews}</Card.Title>
                                        <Card.Text>
                                            <h4 className='text-center text-danger'>Ratting :{review.reating}</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>)
                        }
                    </ItemsCarousel>
                </div>
            </Container>

        </>
    );
};

export default UserReview;