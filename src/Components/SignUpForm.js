import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//This component displays the sign up form popup
const SignUpForm = ({
    handleSubmitEmail,
    googleSignIn,
    handleInputChange,
    firstName,
    lastName,
    email,
    password,
    signUpPopUp,
    toggleSignUpPopUp
}) => {

    return( 
        <div>
            <div className={`${signUpPopUp ? "popUpVisible" : "popUpNotVisible"} popUpBg`} onClick={toggleSignUpPopUp}></div>
            <div className = "signUpForm signInUp" >
                <form className="signInEmail" onSubmit={handleSubmitEmail}>
                    <p className="signInUpText">Sign up to create a registry</p>
                    <FontAwesomeIcon icon={faTimes} onClick={toggleSignUpPopUp} className="closeIcon" aria-hidden title="Close sign in pop up"></FontAwesomeIcon>
                    <span className="visuallyhidden">Close sign in pop up</span>
                    
                    <label htmlFor="firstName" className="visuallyhidden">First Name:</label>
                    <input type="text" id="firstName" value={firstName} placeholder="first name" onChange={handleInputChange} />

                    <label htmlFor="lastName" className="visuallyhidden">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} placeholder="last name"  onChange={handleInputChange}/>

                    <label htmlFor="email" className="visuallyhidden">Email:</label>
                    <input type="email" id="email" value={email} placeholder="email address" onChange={handleInputChange}/>

                    <label htmlFor="password" className="visuallyhidden">Password:</label>
                    <input type="password" id="password" value={password} placeholder="password" onChange={handleInputChange}/>

                    <input type="submit" value="Sign Up" />
                </form>

                <div className="or">
                    <span>or</span>
                </div>

                <form className="signInGoogle">
                    <input type="submit" value="Sign Up with Google" onClick={googleSignIn} />
                </form>
            </div>
        </div>
    )
}

export default SignUpForm;