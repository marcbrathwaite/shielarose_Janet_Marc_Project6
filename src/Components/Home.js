import React from 'react';

const Home = ({
   toggleSignUpPopUp,
   toggleSignInPopUp
   }) => {
      return (
         <div className="homeBgImg">
            <div className="homePage">
               <h1 className="homeTitle">GoFundMyWedding</h1>
               <button className="homeButton homeSignIn" onClick={toggleSignInPopUp}>Sign in</button>
               <button className="homeButton homeSignUp" onClick={toggleSignUpPopUp}>Sign Up</button>
            </div>
         </div>
      )
   }

export default Home;
