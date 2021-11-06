import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img, serviceName, title, price, description} = service;
    return (
        <div className='col-lg-4'>
            <div className="card service text-center">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{serviceName}</h4>
                    <h6 className="card-text">{title}</h6>  
                    <h6>Price: {price}</h6>                  
                    <p>{description}</p>                  
                </div>
            </div>
        </div>
    );
};

export default Service;