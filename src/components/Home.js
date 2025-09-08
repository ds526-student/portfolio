import React from 'react';
import { colors } from '../styles/colours';

export default function Home() {
    return (
      <div id="home" className="home">
          <header className="home-header" style={{ ...styles.minHeight }}>
              <p style={styles.paragraph}>
                  Hi there, my name is
              </p>
              <p style={styles.name}>
                  Damion Sklenars-Clare.
              </p>
              <p style={styles.description}>
                  I'm a second-year Software Engineering student at the University of Waikato with a focus on developing accessible, human-centered software solutions. 
                  I enjoy applying technical skills to solve real-world problems and creating digital experiences that are both functional and engaging.
              </p>
          </header>
      </div>
    );
}

const styles = {
    minHeight: {
        minHeight: '100vh',
        backgroundColor: colors.navy,
    },
    paragraph: {
        fontSize: 'calc(1vw)',
        color: colors.green,
        margin: 0,
        fontWeight: '400',
        fontFamily: 'monospace',
        textAlign: 'left',
        paddingLeft: '25%',
        paddingTop: '25vh',
    },
    name: {
        fontSize: 'calc(4vw)',
        color: colors.lightSlate,
        margin: 0,
        fontWeight: '700',
        fontFamily: 'Inter',
        textAlign: 'left',
        paddingLeft: '25%',
        paddingTop: '0.5vh',
    },
    description: {
        fontSize: 'calc(1vw)',
        color: colors.slate,
        margin: 0,
        fontWeight: '100',
        fontFamily: 'monospace',
        textAlign: 'left',
        paddingLeft: '25%',
        paddingTop: '0.5vh',
        maxWidth: '35vw',
        lineHeight: '1.35',
    }
}
