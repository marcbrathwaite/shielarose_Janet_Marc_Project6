import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const GoBackToRegistriesDashNav = () => {
   return (
      <div className="subNav">
         <Link to="/registries">Go back to registries dashboard</Link>
      </div>
   )
}

export default GoBackToRegistriesDashNav;