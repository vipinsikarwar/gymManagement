import React from 'react';

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-md bg-light navbar-light fixed-top shadow-sm">
                <a class="navbar-brand" href="#">
                    <img src="bird.jpg" alt="Logo" />The Gym</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link">LogIn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}