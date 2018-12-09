import React, { Component } from 'react'; 
import firebase from '../firebase';

const regRef = firebase.database().ref('/All Registries')

class GuestPage extends Component {
    constructor() {
        super();
        this.state = {
            chosenReg: {}
        }
    }

    componentDidMount() {
        regRef.on('value', (snapshot) => {
            // console.log(snapshot.val());
            // this.setState({
            //     chosenReg: snapshot.val()
            // });
        });
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.regObject !== prevProps.regObject) {
    //         this.setState({
    //             regIdeas: this.props.regObject
    //         })   
    //     }
    // }

    render() {
        return (
            <div>
                <h1>welcome to our guest page</h1>
            </div>
        )
    }
}

export default GuestPage;