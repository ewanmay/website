import React from 'react';
import Email from '../../assets/email.svg';
import LinkedIn from '../../assets/linked-in.svg';
function ContactCard() {
  return (
    <div className="card contact-card flex column">
      <div className="contact-summary">
        Overtly Canadian, friend to all, lover of food and technology
    </div>
      <div className="fill flex center-item">
        <div className="divider fill col-6"></div>
      </div>
      <div className="contact-message">
        Let’s connect, I’d love to chat
      </div>
      <div className="flex center-item">
        <a href="https://www.linkedin.com/in/ewan-may/" target="_blank" rel="noopener noreferrer" className="navbar-item">
          <img src={LinkedIn} height="40" alt=""></img>
        </a>
        <a href="mailto:ewanmay3@gmail.com" target="_blank" rel="noopener noreferrer" className="navbar-item">
          <img src={Email} height="40" alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
