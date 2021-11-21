import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header/Header';
import AddAProduct from './AddAProduct/AddAProduct';
import MakeaAdmin from './MakeaAdin/MakeaAdmin';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import ManageProduct from './ManageProduct/ManageProduct';
import MostFaviroteCar from './MostFaviroteCar/MostFaviroteCar';
import MyOrder from './Pay/MyOrder/MyOrder';
import Pay from './Pay/Pay';
import Review from './Review/Review';

const Dashbord = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    return (
        <>
            {
                user.email ?
                    <>
                        <Header></Header>

                        <Link to="/dashborad">Addmin Dashboard </Link>
                        <nav>
                            <Link to='pay'>pay </Link>
                            <br />
                            <Link to='myorder'>my Order </Link>
                            <br />
                            <Link to='review'>review </Link>
                            <br />
                            <Link to='manageAllOrser'>Manage AllOrder </Link>
                            <br />
                            <Link to='mostFaviroteCar'>mostFaviroteCar </Link>
                            <br />
                            <Link to='addAproduct'>addAproduct </Link>
                            <br />
                            <Link to='makeaAdmin'>makeaAdmin </Link>
                            <br />
                            <Link to='manageProduct'>manageProduct </Link>
                        </nav>
                        <Button onClick={logOut} color="inherit">Logout</Button>


                    </>

                    :
                    <Navigate
                        to={{
                            pathname: "/",
                            // state: { from: location }
                        }}
                    />
            }



            <Routes>
                <Route path="pay" element={<Pay />} />
                <Route path="myorder" element={<MyOrder />} />
                <Route path="review" element={<Review />} />
                <Route path="manageAllOrser" element={<ManageAllOrder />} />
                <Route path="addAproduct" element={<AddAProduct />} />
                <Route path="makeaAdmin" element={<MakeaAdmin />} />
                <Route path="manageProduct" element={<ManageProduct />} />
                <Route path="mostFaviroteCar" element={<MostFaviroteCar />} />
            </Routes>
        </>
    );
};

export default Dashbord;