import React from 'react';

const SignUpForm = ({
    handleSubmitEmail,
    googleSignIn,
    handleInputChange,
    firstName,
    lastName,
    email,
    password
}) => {

    return(
        <div className = "signUpForm signInUp" >
            <form className="signInEmail" onSubmit={handleSubmitEmail}>
                <p>Sign Up</p>
                
                <label htmlFor="firstName" className="visuallyhidden">First Name:</label>
                <input type="text" id="firstName" value={firstName} placeholder="First name" onChange={handleInputChange} />

                <label htmlFor="lastName" className="visuallyhidden">Last Name:</label>
                <input type="text" id="lastName" value={lastName} placeholder="Last name"  onChange={handleInputChange}/>

                <label htmlFor="email" className="visuallyhidden">Email:</label>
                <input type="email" id="email" value={email} placeholder="Email address" onChange={handleInputChange}/>

                <label htmlFor="password" className="visuallyhidden">Password:</label>
                <input type="password" id="password" value={password} placeholder="Password" onChange={handleInputChange}/>

                <input type="submit" value="Sign Up" />
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