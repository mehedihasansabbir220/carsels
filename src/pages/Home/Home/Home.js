import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header/Header';
import AllNewCars from '../AllNewCars/AllNewCars';
import Banner from '../Banner/Banner';
import NewCarShowRoom from '../NewCarShowroom/NewCarShowRoom';
import NewsAdvice from '../NewsAdvice/NewsAdvice/NewsAdvice';
import UserReview from '../UserReview/UserReview';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <NewCarShowRoom></NewCarShowRoom>
            <NewsAdvice></NewsAdvice>
            <AllNewCars></AllNewCars>
            <UserReview></UserReview>
            <Footer></Footer>

        </div>
    );
};

export default Home;