import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
                    <img src="/assets/logoo.png" alt="" className="logo" />
                    MAA EMPORIUM
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .logo {
                    width: 100px; 
                    height: 100px; 
                    margin-right: 8px; 
                }

                .navbar-brand {
                    display: flex;
                    align-items: center; 
                }

                .navbar {
                    background-color: #f8f9fa; 
                    padding: 1rem; 
                }

                .nav-link {
                    color: #343a40; 
                    text-decoration: none; 
                }

                .nav-link:hover {
                    color: #007bff; 
                }

                .buttons .btn {
                    margin-left: 10px; 
                }

                @media (max-width: 576px) {
                    .navbar-brand {
                        font-size: 1.5rem; 
                    }

                    .logo {
                        width: 30px;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
