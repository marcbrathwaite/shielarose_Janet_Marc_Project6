import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Registry extends Component {
    constructor(){
        super();
        this.state = {
            regObject: {}
        }
    }

    componentDidMount () {
        this.setState({
            regObject: this.props.registries[this.props.match.params.registry_id]
        })
    }

    render () {
        return (
            <div>
                <header>
                    <h1>{this.state.regObject.name}</h1>     
                </header>    
            </div>    
        )
    }
}

export default withRouter(Registry);