import React from "react";
import { navLinks } from '../config';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.alignLeft}>
                Logo
            </div>
            <div style={styles.alignRight}>
                {navLinks.map(link => (
                    <a key={link.url} href={link.url} style={{ color: 'white', margin: '0 10px' }}>
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
        backgroundColor: '#333',
        padding: '20px',
        color: 'white',
    },
};

export default Navbar;