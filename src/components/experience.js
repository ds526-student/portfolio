import React from 'react';
import { colors } from '../styles/colours';

export default function Experience() {
    return (
      <div id="experience" className="experience" style={styles.minHeight}>
        <div style={{ ...headerStyles.aboutHeader}}>
          <span style={{ ...headerStyles.number }}>
            2.
          </span>
          <span style={{ ...headerStyles.title, paddingLeft: '1%' }}>
            Experience
          </span>
        </div>
      </div>
    );
}

const styles = {
    minHeight: {
        minHeight: '100vh',
        backgroundColor: colors.navy,
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