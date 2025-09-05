import React from "react";
import '../styles/email.css';
import { email } from '../config';

export default function Email() {
  return (
    <div className="email-container">
      {email.map((email, idx) => (
        <a
          key={idx}
          href={email}
        > 
            damionsklenarsclare@gmail.com
        </a>
      ))}
    </div>
  );
}
