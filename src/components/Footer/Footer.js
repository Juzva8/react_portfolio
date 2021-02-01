import React from 'react';
import { MDBIcon } from 'mdbreact';
import './Footer.css';

const Footer = () => (
  <div className="footer">
 
              <ul className="icon-bar">
                  <a href="https://www.linkedin.com/in/laurynas-j-88427319a"target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="linkedin" />
                  </a> {}
                  <a href="mailto:laurynas.juzva@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="google-plus-g" />
                  </a>
               {}
                  <a href="https://github.com/Juzva8" target="_blank" rel="noopener noreferrer">
                    <MDBIcon fab icon="github" />
                  </a>
                
              </ul>
            

  </div>
);

export default Footer;
