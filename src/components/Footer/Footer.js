import React from 'react';
import './Footer.css';
import logo from '../../images/logo-2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            
            <footer id="footer" className="pt-5">
        <section id="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 py-5">
                        <img src={logo} alt=""/>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p>
                        <div className="d-flex">
                            <p className="mb-0">Modamba, NY 80021, United States</p>
                        </div>
                        <div className="d-flex mt-2">
                            <Link href="#">support@medic.com</Link>
                        </div>
                        <div className="d-flex mt-2">
                            <p className="mb-0">Modamba, NY 80021, United States</p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-5 py-5 services">
                        <h5 className="text-uppercase text-white mb-5">services</h5>
                        <Link to="/services" className="d-flex mb-2">
                            <p className="mb-0">Orthopadic Liabilities</p>
                        </Link>
                        <Link to="/services" className="d-flex mb-2">
                            <p className="mb-0">Dental Clinic</p>
                        </Link>
                        <Link to="/services" className="d-flex mb-2">
                            <p className="mb-0">Dormamu Clinic</p>
                        </Link>
                        <Link to="/services" className="d-flex mb-2">
                            <p className="mb-0">Psycological Clinic</p>
                        </Link>
                        <Link to="/services" className="d-flex">
                            <p className="mb-0">Gynaecological Clinic</p>
                        </Link>
                    </div>
                    <div className="col-lg-5 col-md-7 py-5 recent_post">
                        <h5 className="text-uppercase text-white  mb-5">recent posts</h5>
                        <div className="d-flex">
                            <img className="mr-2" src="image/blog/post-thumb-small.jpg" alt=""/>
                            <div>
                                <h5 className="text-white">A lesson adip isicing</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                            </div>
                        </div>
                        <div className="d-flex mt-4">
                            <img className="mr-2" src="image/blog/post-thumb-small.jpg" alt=""/>
                            <div>
                                <h5 className="text-white">How to make an enent</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="footer_bottom">
            <div className="container">
                <div className="row">
                    <div className="py-5 text-center text-lg-left col-lg-6">
                        &copy; Copyright 2021. Designed By <Link href="http://www.facebook.com/shahinahmed.6057">Shahin Ahmed</Link>
                    </div>
                    <div className="pb-5 pt-0 pt-lg-5  text-center text-lg-right col-lg-6">
                        <ul>
                            <li className=""><Link to="/home" className="nav-link">Home</Link></li>
                            <li className=""><Link to="/contact" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </footer>
        </div>
    );
};

export default Footer;