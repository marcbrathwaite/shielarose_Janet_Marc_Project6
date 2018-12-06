import React, { Component } from 'react';
import RegistryForm from './RegistryForm';

class Registry extends Component {
   constructor() {
      super()
      this.state = {
         registries: []
      }
   }
   render() {
      return (
        <div>
            <h1>Registries</h1>
            <RegistryForm/>
        </div>
      )
   }

}

export default Registry;