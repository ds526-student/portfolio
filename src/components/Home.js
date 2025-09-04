import React from 'react';
import '../styles/app.css';
import { colors } from '../styles/colours';

function Home() {
    return (
      <div className="App">
          <header className="App-header" style={{ backgroundColor: colors.navy }}>
              <p style={styles.paragraph}>
                  Hi there, my name is
              </p>
              <p style={styles.name}>
                  Damion Sklenars-Clare
              </p>
              <p style={styles.description}>
                  I am a second-year Software Engineering student at the University of Waikato with a focus on developing accessible, human-centered software solutions. 
                  I enjoy applying technical skills to solve real-world problems and creating digital experiences that are both functional and engaging.
              </p>
          </header>
      </div>
    );
}

const styles = {
    paragraph: {
        fontSize: 'calc(1vw)',
        color: colors.green,
        margin: 0,
        fontWeight: '400',
        fontFamily: 'monospace',
        textAlign: 'left',
        paddingLeft: '5%',
        paddingTop: '20vh',
    },
    name: {

    },
    description: {
      
    }
}

export default Home;
