import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h1 className='text-center'>Contact Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Your Message' rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/confirm">
                <button className="btn btn-primary btn-lg d-flex m-auto">Send</button>
            </Link>
        </div>
    );
};

export default Contact;