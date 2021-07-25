import React from 'react';
import profilePic from '../images/profilePic.JPG'
import FooterHome from '../components/FooterHome';

const HomePage = () => (
   <>
      <div class="homePage">
         <div class="homeElm">
            <img id="avatar" src={profilePic} alt="Avatar" />
            <div class="homeTitle">Hi, I'm Stacey Lee</div>
            <div class="homeSubtitle">an aspiring CS student</div>
         </div>
      </div>
      <FooterHome />
   </>
);

export default HomePage;