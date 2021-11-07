import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    const HomeServices = services.slice(5,8);
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div id="under_slider" className="py-5">
        <div className="container">
            <div className="row text-light rounded overflow-hidden">
                <div className="col-md-6 col-lg-4 p-0 d-md-flex">
                    <div className="card p-4 card_1">
                        <div className="card-text">
                            <i className="fa fa-phone"></i>
                            <h4 className="text-uppercase">emegency cases</h4>
                            <h4 className="text-uppercase mb-3">1-800-700-6200</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 p-0 d-md-flex">
                    <div className="card p-4 card_2">
                        <div className="card-text">
                            <i className="fa fa-stethoscope"></i>
                            <h4 className="text-uppercase">24 HOUR SERVICE</h4>
                            <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit vel eum</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 p-0 d-md-flex last_col">
                    <div className="card p-4 card_3">
                        <div className="card-text">
                            <h4 className="text-uppercase py-4">WORKING HOURS</h4>
                            
                            <div className="working_hour text-uppercase d-flex justify-content-between">
                                <div>
                                    <span>mon - fri -</span>
                                </div>
                                <div>
                                    <span>8:00 - 17:00</span>
                                </div>
                            </div>
                            <hr className="bg-white"/>
                            <div className="working_hour text-uppercase d-flex justify-content-between">
                                <div>
                                    <span>mon - fri -</span>
                                </div>
                                <div>
                                    <span>8:00 - 17:00</span>
                                </div>
                            </div>
                            <hr className="bg-white"/>
                            <div className="working_hour text-uppercase d-flex justify-content-between">
                                <div>
                                    <span>mon - fri -</span>
                                </div>
                                <div>
                                    <span>8:00 - 17:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div 
    className='container mt-4'>
                <div className="row">
                    <h1 className='text-center'>Our Services</h1>
                    {
                        HomeServices.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>       
        </>
    );
};

export default Home;