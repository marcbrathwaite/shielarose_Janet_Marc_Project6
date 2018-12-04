import React, { Component } from 'react';
import './styles/App.css';
import firebase from './firebase';
import Nav from './Components/Nav';

const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }
  render() {
    return (
      <div className="App">
      <Nav user={this.state.user} />
        
      </div>
    );
  }
}

export default App;
