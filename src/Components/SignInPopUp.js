import React from 'react';

const SignInPopUp = (props) => {
   const { 
      handleSubmitEmail, 
      toggleSignInPopUp,
      googleSignIn } 
      = props;
   return (
      <div className="signInForm">
         <form className="signInEmail" >
            <p>Sign In</p>
            <button onClick={toggleSignInPopUp}>X</button>
   
            <label htmlFor="email" className="visuallyhidden">Email:</label>
            <input type="email" id="email" placeholder="Email address"/>
   
            <label htmlFor="password" className="visuallyhidden">Password:</label>
            <input type="password" id="password" placeholder="Password" />
   
            <input type="submit" value="Sign In" onClick={handleSubmitEmail}/>
         </form>
   
         <span>or</span>
   
         <form className="signInGoogle">
            <input type="submit" value="Sign in with Google" onClick={googleSignIn} />
         </form>
      </div>
   );
}

export default SignInPopUp;

