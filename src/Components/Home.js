import React from 'react';

//This function displays the home page of the web application
const Home = ({
   toggleSignUpPopUp,
   toggleSignInPopUp
   }) => {
      return (
         <div className="homeBgImg outerWrapper">
            <div className="homePage">
               <h1 className="homeTitle">GoFundMyWedding</h1>
               <p className="homeDescription"><em>GoFundMyWedding</em> is an online wedding registry for couples. Guests can choose which non-material gift they wish to contribute to, created by the couple. <span>Sign Up to create or find a registry.</span></p>
               <button className="homeButton homeSignIn" onClick={toggleSignInPopUp}>Sign In</button>
               <button className="homeButton homeSignUp" onClick={toggleSignUpPopUp}>Sign Up</button>
            </div>
         </div>
      )
   }

export default Home;
