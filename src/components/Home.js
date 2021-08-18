import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Gym1 from '../resources/Gym-1.jpg';
import Gym2 from '../resources/Gym-2.jpg';
import Gym3 from '../resources/Gym-3.jpg';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
    // const myLoginData = JSON.parse(localStorage.getItem('myloginData'));
    const myLoginData = {}
    const [allPlanData, setAllPlanData] = useState([]);
    const getAllPlans = () => {
        axios.get(`http://localhost:5000/api/v1/plans/getplans`)
        .then((res) => {
            setAllPlanData(res.data)
        })
        .catch(error => { console.log(`Error ${error}`); })
    }

    useEffect(() => {
        getAllPlans()
    }, []);

    let displaynames = allPlanData.map(function (item) {
        return (
            <BrowserRouter>
                <div className="card border-danger m-3 col-sm-3">
                    <div className="card-header bg-transparent border-primary">{`Plan Code : ${item.planId}`}</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">{`Plan Name : ${item.planName}`}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer bg-transparent border-primary">{`Price : ${item.price}`}</div>
                </div>
            </BrowserRouter>
        )
    })

    return (
        <>
        <Header myLoginData={myLoginData}/>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 carousel-img" src={Gym1} alt="First slide" />
                            <div className="carousel-caption">
                                <h3>Gym Image 1</h3>
                                <p>We have to workout hard</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 carousel-img" src={Gym2} alt="Second slide" />
                            <div className="carousel-caption">
                                <h3>Gym Image 2</h3>
                                <p>workoutout is life</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 carousel-img" src={Gym3} alt="Third slide" />
                            <div className="carousel-caption">
                                <h3>Gym Image 3</h3>
                                <p>Health is everythiing</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br />
                <div className="container" id="homePlans">
                    <h4 className="section-heading h5 pb-2">Our Plans/Offers</h4>
                    <div className="row justify-content-center col-sm-12 py-4">
                        {displaynames}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}