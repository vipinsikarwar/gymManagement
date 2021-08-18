import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer py-3">
                <div className="container">
                    <div className="row text-light footer-links">
                        <ul className="col-sm-3">
                            <h4 className="h4 text-muted pb-2">About Us</h4>
                            <li><Link href="#h6" to="/footerlinks#h6">About</Link></li>
                        </ul>
                        <ul className="col-sm-3">
                            <h4 className="h4 text-muted pb-2">Information</h4>
                            <li><Link href="#h6" to="/footerlinks#h6">Features</Link></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">How to ?</a></li>
                        </ul>
                        <ul className="col-sm-3">
                            <h4 className="h4 text-muted pb-2">Locate Us</h4>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Timings</a></li>
                            <li><a href="#">Personal Training</a></li>
                            <li><a href="#">Diet Plan</a></li>
                            <li><a href="#">Exercises</a></li>
                        </ul>
                        <div className="col-sm-3 footer-social-links">
                            <h4 className="text-muted pb-2 w-100">Follow Social</h4>
                            <a><i className="fa fa-fw fa-facebook-square" aria-hidden="true"></i></a>
                            <a><i className="fa fa-fw fa-instagram" aria-hidden="true"></i></a>
                            <a><i className="fa fa-fw fa-twitter-square" aria-hidden="true"></i></a>
                            <a><i className="fa fa-fw fa-youtube-play" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className=" text-center py-3">
                    <span className="text-secondary">
                        <i className="fa fa-fw fa-copyright" aria-hidden="true"></i>
                        2020-21 The Gym Management Application <br/>
                        Stay Fit Stay Fine 
                    </span>
                    </div>
                </div>
            </footer>
        </>
    )
}