import React from 'react';
import headerLogo from '../../images/logo-2.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={NavLink} to="/home">
                <img src={headerLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                
                </Nav>
                <Nav>
                <small style={{color:'white', marginRight:'10px'}}>{user.displayName}</small>
                {
                    user.email ?
                    <button style={{background:'transparent', border:'1px solid white', color:'white'}} onClick={logOut}>Log Out</button>
                    :
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;