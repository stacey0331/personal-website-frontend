import React from 'react';
import Footer from '../components/Footer';
import backPic from '../images/backPic.JPG';
import emailIcon from '../images/emailIcon.png';
import curlyArrow from '../images/curlyArrow.png';

const ContactMePage = () => {
   return (
      <>
         <div class="contactMePage">
            <h1>Contact me</h1>
            <p>
               <div>Feel free to contact me regarding anything (including your thoughts on this site :) </div>
               My email: 
               <div class="email">
                  <a className="coloredLink" href="mailto:staceyleetsaihsun@gmail.com">staceyleetsaihsun@gmail.com</a>
                  <img className="buttonIcon" src={emailIcon} alt=" " />
               </div>

            </p>

            <img className="contactMeImg" src={backPic} alt="Stacey" />
         </div>
         <div className="socialsText">
               Connect with me on socials <img className="curlyArrow" src={curlyArrow} alt="arrow" />
         </div>
         <Footer />
      </>
   );
}

export default ContactMePage;