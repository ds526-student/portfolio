import React from "react";
import { navLinks } from '../config';
import { colors } from "../styles/colours";

function Navbar() {
    return (
        <nav style={{ ...styles.nav, backgroundColor: colors.navy }}>
            <a href="/" style={{ color: colors.green, textDecoration: 'none' }}>
                Home
            </a>
            <div style={styles.links}>
                {navLinks.map(link => (
                    <a key={link.url} href={link.url} style={{ color: colors.green, margin: '0 10px', textDecoration: 'none' }}>
                        {link.name}
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
        padding: '20px',
        color: 'white',
        position: 'fixed',
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

export default Navbar;