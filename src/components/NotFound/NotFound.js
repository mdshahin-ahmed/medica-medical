import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <img className='w-100' src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg" alt="" />
                        <NavLink to='/home'>
                            <button className="btn btn-primary d-flex m-auto">Home</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;