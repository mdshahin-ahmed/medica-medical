import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    const [details, setDetails] = useState([]);
    console.log(services);
    useEffect( () => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    useEffect( () => {
        if(services.length > 0){
            const matchData = services.find(service => service.id == serviceId)
            setDetails(matchData);
        }
        // console.log(matchData);
    },[services]);    
    const {img, title,serviceName,description, price} = details;
    return (
        <div>
            <div className="container  mt-5 pt-5">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="w-100 h-100 rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{serviceName}</h4>
                                <h6 className="card-text">{title}</h6>  
                                <h6>Price: {price}</h6>                  
                                <p>{description}</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/confirm'>
                    <button className='btn btn-primary d-flex mt-5 m-auto'>Confirm</button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;