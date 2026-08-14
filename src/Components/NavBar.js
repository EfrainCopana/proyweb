import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/Logo.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Hotweels } from './Pages/Hotweels';

const links = [
    {
        name: "Home",
        href: "/home",
    },
    {
        name: "Skills",
        href: "/skills",
    },
    {
        name: "Blog",
        href: "/blog",
    },
    {
        name: "Quienes Somos",
        href: "/quienessomos",
    },
    {
        name: "Contacto",
        href: "/contacto",
    }
];
export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" style={{ width: '130px', height: 'auto' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                    {links.map((x, index) => (
                            <Link
                                key={index}
                                to={x.href}
                                className={activeLink === x.name.toLowerCase() ? 'active navbar-link' : 'navbar-link'}
                                onMouseOver={() => onUpdateActiveLink(x.name.toLowerCase())}
                                onMouseOut={() => onUpdateActiveLink(activeLink)}
                            >
                                {x.name}
                            </Link>
                    ))}
                        <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/hotweels">Hotweels</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/mesa">Juegos de Mesa</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/legos">Legos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/figuras">Figuras</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item as={Link} to="/pagos">Pagos</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <span className={`navbar-text ${scrolled ? 'scrolled' : ''}`}>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/" target="_blank"> <img src={navIcon1} alt="" /></a>
                            <a href="https://es-la.facebook.com/" target="_blank"> <img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/" target="_blank"> <img src={navIcon3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('Conectado')}><span>Iniciar Sesion</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
