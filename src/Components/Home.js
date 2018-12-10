import React from 'react';

const Home = ({
   toggleSignUpPopUp,
   toggleSignInPopUp
   }) => {
      return (
         <div className="homeBgImg outerWrapper">
            <div className="homePage">
               <h1 className="homeTitle">GoFundMyWedding</h1>
               <p className="homeDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt, magni nemo alias iusto illum fuga? Consequatur, ratione et maxime magnam eos inventore dignissimos accusamus nam voluptas aliquam minima quibusdam!</p>
               <button className="homeButton homeSignIn" onClick={toggleSignInPopUp}>Sign In</button>
               <button className="homeButton homeSignUp" onClick={toggleSignUpPopUp}>Sign Up</button>
            </div>
         </div>
      )
   }

export default Home;
