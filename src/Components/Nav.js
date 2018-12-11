import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({
    signOut,
    displayName,
    resetSearchParams
}) => {
    return (
        <nav className="clearfix">
            <div className="outerWrapper">
                <Link to="/registries" onClick={resetSearchParams}>
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

