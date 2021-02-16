import React from 'react';
import './Footer.css';
import resume from "../Resume/Resume.pdf"; 

const Footer = () => (
  <div className="footer">
 
              <ul className="icon-bar">
                  <a href="https://www.linkedin.com/in/laurynas-j-88427319a"target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                  </a> {}
                  <a href="mailto:laurynas.juzva@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-google"></i>
                  </a>
               {}
                  <a href="https://github.com/Juzva8" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i>
                  </a>
                  <a href={resume} target="_blank" rel="noopener noreferrer">
                  <i class="far fa-address-card"></i>
                  </a>
              </ul>
            

  </div>
);

export default Footer;
