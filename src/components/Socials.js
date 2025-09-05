import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/socials.css';
import { socialMedia } from '../config';

const socials = [
    { icon: <FaGithub />, url: 'https://github.com/ds526-student' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/damion-sklenars-clare-386777371/' }
]

export default function Socials() {
  return (
    <div className="socials-container">
      {socialMedia.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
        > 
          {socials[idx].icon}
        </a>
      ))}
    </div>
  );
}
