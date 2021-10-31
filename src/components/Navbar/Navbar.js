import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navbar = () => {
    const { user, handleLogOut } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand me-5" to="/home">Sagar's Healthcare</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link me-3" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" aria-current="page" to="/placeorder">Place Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3" aria-current="page" to="/premiumservices">Premium Services</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                            </li> */}

                            {/* {
                                user?.email ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Hello {user.displayName}</Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                            } */}

                            {user?.email ?
                                <Link to="/login">
                                    <button onClick={handleLogOut} className="btn btn-warning me-2" >Logout</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-warning me-2" >Login</button>
                                </Link>
                            }

                            {/* {!user?.email &&

                                <Link to="/register">
                                    <button className="btn btn-warning me-2" >Register</button>
                                </Link>
                            } */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;