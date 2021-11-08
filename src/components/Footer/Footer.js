import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/logo-2.png';

const Footer = () => {
    return (
        <div>
            
            <footer id="footer" class="pt-5">
        <section id="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 py-5">
                        <img src={logo} alt=""/>
                        <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p>
                        <div class="d-flex">
                            <p class="mb-0">Modamba, NY 80021, United States</p>
                        </div>
                        <div class="d-flex mt-2">
                            <NavLink href="#">support@medic.com</NavLink>
                        </div>
                        <div class="d-flex mt-2">
                            <p class="mb-0">Modamba, NY 80021, United States</p>
                        </div>

                    </div>
                    <div class="col-lg-3 col-md-5 py-5 services">
                        <h5 class="text-uppercase text-white mb-5">services</h5>
                        <NavLink href="#" class="d-flex mb-2">
                            <p class="mb-0">Orthopadic Liabilities</p>
                        </NavLink>
                        <NavLink href="#" class="d-flex mb-2">
                            <p class="mb-0">Dental Clinic</p>
                        </NavLink>
                        <NavLink href="#" class="d-flex mb-2">
                            <p class="mb-0">Dormamu Clinic</p>
                        </NavLink>
                        <NavLink href="#" class="d-flex mb-2">
                            <p class="mb-0">Psycological Clinic</p>
                        </NavLink>
                        <NavLink href="#" class="d-flex">
                            <p class="mb-0">Gynaecological Clinic</p>
                        </NavLink>
                    </div>
                    <div class="col-lg-5 col-md-7 py-5 recent_post">
                        <h5 class="text-uppercase text-white  mb-5">recent posts</h5>
                        <div class="d-flex">
                            <img class="mr-2" src="image/blog/post-thumb-small.jpg" alt=""/>
                            <div>
                                <h5 class="text-white">A lesson adip isicing</h5>
                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                            </div>
                        </div>
                        <div class="d-flex mt-4">
                            <img class="mr-2" src="image/blog/post-thumb-small.jpg" alt=""/>
                            <div>
                                <h5 class="text-white">How to make an enent</h5>
                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="footer_bottom">
            <div class="container">
                <div class="row">
                    <div class="py-5 text-center text-lg-left col-lg-6">
                        &copy; Copyright 2021. Designed By <NavLink href="http://www.facebook.com/shahinahmed.6057">Shahin Ahmed</NavLink>
                    </div>
                    <div class="pb-5 pt-0 pt-lg-5  text-center text-lg-right col-lg-6">
                        <ul>
                            <li class=""><NavLink to="/home" class="nav-link">Home</NavLink></li>
                            <li class=""><NavLink to="/services" class="nav-link">Services</NavLink></li>
                            <li class=""><NavLink to="/contact" class="nav-link">Contact</NavLink></li>
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