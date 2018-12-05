import React, { Component } from 'react';

class RegistryForm extends Component {
    constructor(){
        super()
        this.state = {
            registries: []
        }
    }
    render(){
        return (
            <h1>Registries</h1>
        )
    }

}

export default RegistryForm;