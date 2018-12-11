import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({
    signOut,
    displayName
}) => {
    return (
        <nav className="clearfix">
            <div className="outerWrapper">
                <Link to="/registries">
                    <h1 className="navH1">GoFundMyWedding</h1>
                </Link>
                <ul>
                    <li>
                        <p>Welcome, {displayName} </p>
                    </li> 
                    <li>
                        <button className="signOut" onClick={signOut}>Sign Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

