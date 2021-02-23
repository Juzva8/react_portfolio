import React from 'react';
import './contact.css';
import ContactUs from '../../components/contactForm/ContactUs'


function Contact() {
  return (
    <container> 
      <h4> <strong>Email:</strong>
       <a>
       laurynas.juzva@gmail.com</a> 
       </h4>
       <h4> <strong>Phone Number:</strong> 
       <a>
       ‪(951) 254-7315‬ </a> 
       </h4>
      
<ContactUs />
    </container>

  );
}


export default Contact;
