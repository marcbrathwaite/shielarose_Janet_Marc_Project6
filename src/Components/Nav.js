import React from 'react';

    const Nav = ({
        user, 
        toggleSignInPopUp, 
        signOut,
        displayName
    }) => {
    
    return (
        <nav className="clearfix">
            <div className="outerWrapper">
                <h1>gofundmywedding</h1>

                {user 
                ? 
                <ul>
                    <li>
                        <p>Welcome, {displayName} </p>
                    </li> 
                    <li>
                        <button className="signInOut" onClick={signOut}>Sign Out</button>
                    </li>
                </ul>
                : 
                <button className="signInOut" onClick={toggleSignInPopUp}>Sign in</button>
                }
                
            </div>
        </nav>
    );
}

export default Nav;

