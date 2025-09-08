import React from "react";
import { colors } from '../styles/colours';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer style={styles.footer} className="footer">
            <p>Design inspired by <a href="https://v4.brittanychiang.com/">Brittany Chiang</a></p>
            <p>Built by Damion Sklenars-Clare</p>
        </footer>
    );
}

const styles = {
    footer: {
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: colors.navy,
        color: colors.lightSlate,
        fontFamily: 'monospace',
        fontSize: 'calc(0.8vw)',
    },
}