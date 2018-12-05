import React from 'react';

const SignUpForm = ({
    handleSubmitEmail,
    googleSignIn
}) => {

    return(
        <div className = "signInForm" >
            <form className="signInEmail" >
                <p>Sign Up</p>
                
                <label htmlFor="firstName" className="visuallyhidden">First Name:</label>
                <input type="text" id="firstName" placeholder="first name" />

                <label htmlFor="lastName" className="visuallyhidden">Last Name:</label>
                <input type="text" id="lastName" placeholder="last name" />

                <label htmlFor="email" className="visuallyhidden">Email:</label>
                <input type="email" id="email" placeholder="email address" />

                <label htmlFor="password" className="visuallyhidden">Password:</label>
                <input type="password" id="password" placeholder="password" />

                <input type="submit" value="Sign Up" onClick={handleSubmitEmail} />
            </form>

            <div className="or">
                <span>or</span>
            </div>

            <form className="signInGoogle">
                <input type="submit" value="Sign Up with Google" onClick={googleSignIn} />
            </form>
      </div >
    )
}

export default SignUpForm;