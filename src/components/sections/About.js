import React from 'react';
import { colors } from '../../styles/colours';
import '../../styles/about.css';

export default function About() {
    return (
      <div id="about" className="about" style={styles.minHeight}>
        <div style={{ ...headerStyles.aboutHeader}}>
          <span style={{ ...headerStyles.number }}>
            1.
          </span>
          <span style={{ ...headerStyles.title, paddingLeft: '1%' }}>
            About Me
          </span>
        </div>
        <div style={{ ...styles.content }}>
          <div style={{ paddingRight: '3%', paddingTop: '2%' }}>
            <p style={contentStyles.text}>
              As a second-year Software Engineering student at the University of Waikato, I'm motivated
              to continue learning and applying my skills in ways that will positively impact users.
              I thoroughly enjoy working on projects that challenge me to think critically, and adapt
              quickly. My experience so far has further strengthened my interest in building software 
              that balances quality and usability.
            </p>
            <br></br>
            <p style={contentStyles.text}>
              Looking ahead, I am excited to pursue internship 
              opportunities where I can contribute to real-world projects and solutions, develop my 
              professional skills, and continue growing as a developer.
            </p>
          </div>
          <div className="img-container">
            <img
              src={require('../../images/stockGrass.jpg')}
              alt="Decorative grass"
            />
          </div>
        </div>
      </div>
    );
}

const styles = {
    minHeight: {
        minHeight: '100vh',
        backgroundColor: colors.navy,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '25%',
        paddingTop: '0.5vh',
    }
}

const headerStyles = {
    aboutHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: '25%',
        paddingTop: '25vh',
    },
    number: {
        fontSize: 'calc(1vw)',
        color: colors.green,
        margin: 0,
        fontWeight: '400',
        fontFamily: 'monospace',
        textAlign: 'left',
        display: 'block',
        paddingTop: '2vh',
    },
    title: {
        fontSize: 'calc(2vw)',
        color: colors.lightSlate,
        margin: 0,
        fontWeight: '700',
        fontFamily: 'Inter',
        textAlign: 'left',
        display: 'block',
    }
}

const contentStyles = {
  text: {
        fontSize: 'calc(1vw)',
        color: colors.slate,
        margin: 0,
        fontWeight: '100',
        fontFamily: 'monospace',
        textAlign: 'left',
        maxWidth: '35vw',
        lineHeight: '1.35',
  },
}