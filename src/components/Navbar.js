import React from "react";
import { navLinks } from '../config';
import { colors } from "../styles/colours";
import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav style={{ ...styles.nav, backgroundColor: colors.navy }}>
            <a href="/" className="nav-link">
                Home
            </a>
            <div style={styles.links}>
                {navLinks.map((link, index) => (
                    <a key={link.url} href={link.url} className="nav-link">
                        <span style={{ color: colors.green }}>{index + 1}.</span> <span className="nav-link-span">{link.name}</span>
                    </a>
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