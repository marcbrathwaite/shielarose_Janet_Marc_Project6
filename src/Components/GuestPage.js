import React, { Component } from 'react'; 
import firebase from '../firebase';

const regRef = firebase.database().ref('/All Registries')

class GuestPage extends Component {
    constructor() {
        super();
        this.state = {
            regInfo: {},
        }
    }

    componentDidMount() {
        const registryId = this.props.match.params.registry_id //registryId now available in params
        regRef.on('value', (snapshot) => {
            this.setState({
                regInfo: snapshot.val()[registryId] || {}, //saved snapshot in regInfo 
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.regInfo.name}</h1> 
                {/* able to print custom info on page */}
            </div>
        )
    }
}

export default GuestPage;