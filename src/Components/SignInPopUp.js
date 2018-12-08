import React from 'react';

const SignInPopUp = ({ 
   handleSignInEmail,
   toggleSignInPopUp,
   googleSignIn,
   handleInputChange
   }) => {
   
   return (
      <div className="signInForm signInUp">
         <form className="signInEmail" >
            <p>Sign In</p>
            <button onClick={toggleSignInPopUp}>X</button>
   
            <label htmlFor="email" className="visuallyhidden">Email:</label>
            <input type="email" id="email" placeholder="Email address" onChange={handleInputChange}/>
   
            <label htmlFor="password" className="visuallyhidden">Password:</label>
            <input type="password" id="password" placeholder="Password" onChange={handleInputChange}/>
   
            <input type="submit" value="Sign In" onClick={handleSignInEmail}/>
         </form>
   
         <div className="or">
            <span>or</span>
         </div>
   
         <form className="signInGoogle">
            <input type="submit" value="Sign in with Google" onClick={googleSignIn} />
         </form>
      </div>
   );
}

export default SignInPopUp;

