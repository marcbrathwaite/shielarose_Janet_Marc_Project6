import React from 'react';

const Nav = ({ user }) => {



    return (
        <nav>
            <h1>gofundmywedding</h1>
            {user 
            ? 
            <p>Welcome </p> 
            : 
            <button>Log in</button>
            }
        </nav>
    );
}

export default Nav;

