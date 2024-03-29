import React from 'react';
import inIcon from '../images/linkedinIcon.png';
import fbIcon from '../images/fbIcon.png';

const Footer = () => (
 <div className="footer">
    <a href="https://www.linkedin.com/in/stacey-lee-598719191/" target="_blank" rel="noopener noreferrer">
        <img className="linkedin social" src={inIcon} alt="LinkedIn" />
    </a>
    <a href="https://www.facebook.com/stacey.lee.357284" target="_blank" rel="noopener noreferrer">
        <img className="facebook social" src={fbIcon} alt="Facebook" />
    </a>
    <div className="copyright">Copyright ©{new Date().getFullYear()} Stacey Lee</div>
    </div>
);

export default Footer;