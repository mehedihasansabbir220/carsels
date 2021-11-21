import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Car On Sels </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/allcars'>All Cars </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/addnewcar'>Add New Car </Link>
                        </li>
                        <li className='text-center me-auto'>
                            {
                                user.email ?
                                    <>


                                        <Link to="/dashborad">Addmin Dashboard </Link>
                                        <Button onClick={logOut} color="inherit">Logout</Button>


                                    </>

                                    :
                                    <Link to="/login">Login</Link>}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;