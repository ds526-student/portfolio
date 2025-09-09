import React, { useState } from 'react';
import { colors } from '../../styles/colours';
import '../../styles/experience.css';

export default function Experience() {
    const [toggleState, setToggleState] = useState(1);

    function updateToggle(index) {
      setToggleState(index);
    }

    return (
      <div id="experience" className="experience" style={styles.minHeight}>
        <div style={{ ...headerStyles.Header}}>
            <span style={{ ...headerStyles.number }}>
              2.
            </span>
            <span style={{ ...headerStyles.title, paddingLeft: '1%' }}>
              Experience
            </span>
        </div>
          <div style={{ ...styles.content }}>
            <div style={{ ...styles.tabs }} className='tab-list'>
              <ul>
                <li onClick={()=>updateToggle(1)}>Job 1</li>
                <li onClick={()=>updateToggle(2)}>Job 2</li>
              </ul>
            </div>
            <div style={{ ...styles.information }}>
              <div className={toggleState === 1 ? "active-content" : "content"}>
                Job 1
              </div>
              <div className={toggleState === 2 ? "active-content" : "content"}>
                Job 2
              </div>
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
        gap: '5vw',
    },
    tabs: {
        fontSize: 'calc(1vw)',
        margin: 0,
        fontWeight: '100',
        fontFamily: 'monospace',
        textAlign: 'left',
        color: colors.slate,
    },
    information: {
        paddingTop: '2vh',
    },

}

const headerStyles = {
    Header: {
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
      paddingLeft: '25%',
      paddingTop: '0.5vh',
      maxWidth: '35vw',
      lineHeight: '1.35',
    },
}