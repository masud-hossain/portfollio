import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Img/logo-01.png'
import './login.css'

const Login = () => {
    return (
        <div className="login-component">
            <header className="container-fluid bg-dark">
                <div className="container logo">
                    <div className="row">
                        <div className="col-4">
                        <img src={logo} alt="" />
                        </div>
                        <div className="col-8 header-menu">
                            <ul>
                                <li> <Link to="">About</Link> </li>
                                <li> <Link to="">Contact</Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 col-md-5 login-area">
                        <div className="login">
                            <div className="form">
                                <h3>Welcome Back</h3>
                                <p>Welcome Back! Please enter your details</p>
                                <form action="">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" placeholder='Email Address'/>
                                    <label htmlFor="password">password</label>
                                    <input type="password" placeholder='Password'/>
                                    <input type="checkbox" /> Remember me
                                    <input type="submit" value="Sign in" />
                                </form>
                                <Link className='forgot-link' to="/">Forgot Password? </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-7 col-md-7 hero-area">
                        <div>
                        <h2>Welcome to Tech Peake</h2>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error explicabo deserunt esse voluptates dolore repellendus impedit odit eos qui maxime nisi, ipsa modi eaque. Odit voluptates doloribus soluta quia corporis amet, adipisci, ipsam quisquam minima laudantium, tenetur asperiores officiis nulla iure impedit! Pariatur suscipit magni quos fuga, optio provident doloremque?
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <footer className='container-fluid'>
            <div className="container">
                <p>&copy; 2022 Tech Peake</p>
            </div>
        </footer>
        </div>
    );
}

export default Login;
