import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GoBackToRegistriesDashNav extends Component {
   render() {
      return (
         <div className="subNav">
            <Link to="/registries">Go back to registries dashboard</Link>
         </div>
      )
   }
}

export default GoBackToRegistriesDashNav;