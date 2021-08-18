import React, { useState, useEffect } from 'react';
import Logo from '../resources/logo.png';
import { Link, useHistory } from "react-router-dom";

export default function Header(props) {
    let val;
    if(props.value === false) {
         val = props.value;
    } else if (props.value === undefined){
         val = true;
    }
    const [isSignIn, setIsSignIn] = useState(val)
    let history = useHistory();
    let signout = ()=> {
        localStorage.clear();
        history.push('/home')
    }

    const myLoginData = JSON.parse(localStorage.getItem('myloginData'))

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top header-bg shadow">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} className="logo" alt="Logo" />The Gym
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
                    <div>
                        <ul className="navbar-nav ustify-content-between">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home" title="Home">
                                <i className="fa fa-fw fa-home" aria-hidden="true"></i>
                                Home</Link>           
                            </li>
                            <li className="nav-item">
                                <Link className={myLoginData ? "nav-link" : "display-none"} to={myLoginData ? (myLoginData.isAdmin ? "/admindashboard" : "/memberdashboard") : null} title="Dashboard">
                                <i className="fa fa-fw fa-tachometer" aria-hidden="true"></i>
                                Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={myLoginData ? (myLoginData.isAdmin ? "nav-link" : "display-none") : "display-none"} to={myLoginData ? (myLoginData.isAdmin ? "/addplan" : null) : null} title="Plans">
                                <i className="fa fa-fw fa-sticky-note" aria-hidden="true"></i>
                                Plans</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={myLoginData ? "nav-link" : "display-none"} to="/login" title="Sign In">
                            <i className="fa fa-sign-in" aria-hidden="true"></i> Hi, {myLoginData ? myLoginData.userName : null}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={!myLoginData ? "nav-link" : "display-none"} to="/login" title="Sign In">
                            <i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={!myLoginData ? "nav-link" : "display-none"} to="/register" title="Sign Up">
                            <i className="fa fa-user-plus" aria-hidden="true"></i> Register</Link>
                        </li>
                        <li className="nav-item">
                            <a className={myLoginData ? "nav-link" : "display-none"} onClick={signout} title="Sign Out">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}