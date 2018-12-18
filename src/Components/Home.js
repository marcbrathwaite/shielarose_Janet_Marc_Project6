import React from 'react';

//This function displays the home page of the web application
const Home = ({
   toggleSignUpPopUp,
   toggleSignInPopUp
   }) => {
      return (
         <div className="homeBgImg outerWrapper">
            <div className="homePage">
               <h1 className="homeTitle"><span>go</span><span>fund</span><span>my</span><span>wedding</span></h1>
               <p className="homeDescription">An online wedding registry for couples. <span>Sign up to create your own registry or contribute to an existing one.</span></p>
               <button className="homeButton homeSignIn" onClick={toggleSignInPopUp}>Sign In</button>
               <button className="homeButton homeSignUp" onClick={toggleSignUpPopUp}>Sign Up</button>
            </div>
         </div>
      )
   }

export default Home;
