import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/slider/slider-bg-1.jpg'
import img2 from '../../images/slider/slider-bg-2.jpg'
import img3 from '../../images/slider/slider-bg-3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="slider-img-container">
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <div className='slider-caption'>
                        <h1>Our Best Surgeons</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="slider-img-container">
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <div className="slider-caption">
                        <h1>We Care About Your Health</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="slider-img-container">
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <div className="slider-caption">
                        <h1>Beast Medical Services</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;