import React from 'react';

const Nav = (props) => {
    const { user, toggleSignInPopUp, signOut } = props;
    return (
        <nav>
            <h1>gofundmywedding</h1>
            {user 
            ? 
            <ul>
                <li>
                    <p>Welcome</p>
                </li> 
                <li>
                    <button className="signInOut" onClick={signOut}>Sign Out</button>
                </li>
            </ul>
            : 
            <button className="signInOut" onClick={toggleSignInPopUp}>Sign in</button>
            }
        </nav>
    );
}

export default Nav;

