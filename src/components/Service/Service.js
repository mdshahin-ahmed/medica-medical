import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, img, serviceName, title, price, description} = service;
    
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="card service text-center">
                <div className="card-img-container">
                    <img src={img} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{serviceName}</h4>
                    <h6 className="card-text">{title}</h6>  
                    <h6>Price: {price}</h6>                  
                    <p>{description}</p>                  
                </div>
                <NavLink to={`/booking/${id}`}>
                    <button className='btn btn-primary mb-3'>Book {serviceName} Service</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Service;