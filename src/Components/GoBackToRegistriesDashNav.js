import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//This component displays the 'Go Back to Registry Dashboard Link'
const GoBackToRegistriesDashNav = ({
   resetSearchParams
}) => {
   return (
      <div className="goBackNav outerWrapper">
         <Link to="/registries" className="goBackNavLink" onClick={resetSearchParams}>  
            <FontAwesomeIcon icon={faArrowLeft} aria-hidden title="go back to registries dashboard" className="goBackNavArrow"/>
            Go back to registry dashboard
         </Link>
      </div>
   )
}

export default GoBackToRegistriesDashNav;