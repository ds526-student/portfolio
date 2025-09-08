import React from "react";
import { navLinks } from '../config';
import { colors } from "../styles/colours";
import '../styles/navbar.css';
import logo from '../images/logo.png';
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
    return (
        <nav style={{ ...styles.nav, backgroundColor: colors.navy }}>
            <NavHashLink to="#home" className="nav-link">
                <img 
                    src={logo}
                    alt="Logo"
                    style={{ height: '40px', width: '40px' }}
                />
            </NavHashLink>
            <div style={styles.links}>
                {navLinks.map((link, index) => (
                    <NavHashLink key={link.url} to={link.url} className="nav-link">
                        <span style={{ color: colors.green }}>{index + 1}.</span> <span className="nav-link-span">{link.name}</span>
                    </NavHashLink>
                ))}
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '2.5%',
        paddingTop: '3vh',
        color: 'white',
        position: 'sticky',
        fontFamily: 'monospace',
        fontSize: 'calc(0.75vw)',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    links: {
        display: 'flex',
        alignItems: 'center',
    }
};