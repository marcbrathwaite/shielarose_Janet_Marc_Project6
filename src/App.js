import React, { Component } from 'react';
import './styles/App.css';
import firebase from './firebase';
import Nav from './Components/Nav';
import SignInPopUp from './Components/SignInPopUp'

// const dbRef = firebase.database().ref();

// Google provider & auth module
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      signInPopUp: false,
      
    }
  }
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  toggleSignInPopUp = () => {
    this.setState({
      signInPopUp: !this.state.signInPopUp
    })
  }

  handleSubmitEmail = e => {
    e.preventDefault();
  }

  // Google login function 
  googleSignIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider)
    .then(result => {
      this.setState({
        user: result.user,
        signInPopUp: false
      })
    })
  }

  signOut = () => {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav 
          user={this.state.user} 
          toggleSignInPopUp={this.toggleSignInPopUp}
          signOut={this.signOut}
        />
        {this.state.signInPopUp 
        ?
        <SignInPopUp
          handleSubmitEmail={this.handleSubmitEmail}
          toggleSignInPopUp={this.toggleSignInPopUp}
          googleSignIn={this.googleSignIn}
        />
        :
        null
        }

        
      </div>
    );
  }
}

export default App;
