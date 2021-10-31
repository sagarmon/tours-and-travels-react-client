import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import img1 from '../../banner-images/img1.png';
import img2 from '../../banner-images/img2.png';
import img3 from '../../banner-images/img3.png';
import Service from '../Service/Service';
import safety from '../../images/safety.png';

const Home = () => {
    // const { user } = useAuth();
    const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('./servicesA11.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
    useEffect(() => {
        fetch('https://chilling-hollow-32080.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <header className="container m-5">
                <div className="jumbotron">
                    <h1 className="display-4 fw-bolder mb-3">Enjoy Vacation with <span className="text-primary">Sagar's Tours & Travels</span></h1>
                    {/* <h3>WELCOME TO THE FITNESS HUB THAT’S 24/7 HUMAN</h3> */}
                    <p className="lead fw-bold">With more than 1.4 million hotels in 200 countries and regions, we've built an extensive hotel network to give our customers a fantastic choice of accommodation. Our far-reaching flight network has over 2 million individual flight routes connecting more than 5,000 cities around the globe. When you combine this with our 24/7 English customer service and various other travel products, you can trust us to take care of your next trip.</p>
                    {/* <hr className="my-4" /> */}
                    {/* <Link className="btn btn-primary btn-dark btn-lg" to="/about" role="button">Learn more</Link> */}
                </div>
            </header>
            <hr />
            <main className="mb-5">
                <div className="container">
                    <h1 className="text-warning fw-bold mb-3 text-decoration-underline">Top Destinations</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            >
                            </Service>)
                        }
                    </div>
                </div>

                {/* carousel */}
                {/* <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div>
                    <img src={safety} className="w-100" alt="" />
                </div> */}
            </main>
        </div>
    );
};

export default Home;