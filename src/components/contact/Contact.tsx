import React from 'react';
import './ContactCard';
import ContactCard from './ContactCard';
import './styles.css'
import Loader from '../shared/Loader';

function Contact() {
  return (
    <div className="contact flex center-item">
      <Loader>
        <ContactCard />
      </Loader>
    </div>
  );
}

export default Contact;
