import React, { Component } from 'react';
import './styles/App.css';
import firebase from './firebase';
import Nav from './Components/Nav';
import SignInPopUp from './Components/SignInPopUp';
import SignUpForm from './Components/SignUpForm';
import RegistryForm from './Components/RegistryForm';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

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
        this.setState({ 
          user : user 
        })
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
      console.log(result)
      this.setState({
        user: result.user,
        signInPopUp: false
      }, () => {
        this.dbRef = firebase.database().ref(`/${this.state.user.uid}`);
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
      <Router>
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
        
          {this.state.user
          ?
          <React.Fragment>
            <Redirect to="/createregistry" />
            <Route path="/createregistry" render={() => (
              <RegistryForm />
            )} />
          </React.Fragment>
          :
          <React.Fragment>
            <Redirect to="/" />
            <Route exact path="/" render={() => (
                <SignUpForm
                  handleSubmitEmail={this.handleSubmitEmail}
                  toggleSignInPopUp={this.toggleSignInPopUp}
                  googleSignIn={this.googleSignIn}
                />
              )} 
            />
          </React.Fragment>
          }

          {/* <Route path="/createregistry" render={() => (
            <RegistryForm />
          )} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
