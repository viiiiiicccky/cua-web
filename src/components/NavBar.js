import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/img/cua-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../App.css';


export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home');
    const {scrolled, seScrolled} = useState(false); // when user scrolls, bkg color changes

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        } 
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [] )

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    </Link>
                    <Link to="/game-schedule" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#gameschedule" className={activeLink === 'gameschedule' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gameschedule')}>Game Schedule</Nav.Link>
                    </Link>
                    <Link to="/events" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#events" className={activeLink === 'events' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('events')}>Events</Nav.Link>
                    </Link>
                    <Link to="/gallery" style={{ textDecoration: 'none' }}>
                        <Nav.Link href="#gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Nav.Link>
                    </Link>
                </Nav>

                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="" /></a>
                        <a href="#"><img src={navIcon2} alt="" /></a>
                        <a href="#"><img src={navIcon3} alt="" /></a>
                    </div>
                    <Link to="/contact-us" style={{ textDecoration: 'none' }}>
                        <button className="vvd" onClick={() => console.log('contactus')}><span>Contact Us</span></button>
                    </Link>
                </span>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    )
}