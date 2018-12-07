import React, { Component } from 'react';
import './styles/App.css';
import firebase from './firebase';
import Nav from './Components/Nav';
import SignInPopUp from './Components/SignInPopUp';
import SignUpForm from './Components/SignUpForm';
import RegistryDashboard from './Components/RegistryDashboard';
import Registry from './Components/Registry';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Google provider & auth module
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      signInPopUp: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      displayName: '',
      registries: []
      
    }
  }
  componentDidMount(){
    //Keeps user logged in even if they exit the page.
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ 
          user : user
        }, () => {  
          //Create Firebase DB Ref to the user ID and set state
          this.setState({
            dbRef: firebase.database().ref(`/${this.state.user.uid}`) 
          }, () => {
            //Pull the display name from Userinfo in firebase (create Userinfo if it doesnt exist) and set state
            this.state.dbRef.child('UserInfo/name').on('value', (snapshot) => {
              this.setState({
                displayName: snapshot.val()
              })
            })
            //Pulls the list of registries from firebase and set state
            this.state.dbRef.child('Registries').on('value', (snapshot) => {
              this.setState({
                registries: snapshot.val() || {}
              })
            })
          })
        })
      }
    })
  }
  //Function to toggle boolean for signin popup
  toggleSignInPopUp = () => {
    this.setState({
      signInPopUp: !this.state.signInPopUp
    })
  }

  handleSubmitEmail = e => {
    e.preventDefault();
    //Create signup on firebase
    //Push Email signup user to firebase and sets user in state
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((result) => {
      this.setState({
        user: result.user
      }, () => {
        const userObj = {
          name: `${this.state.firstName} ${this.state.lastName}`,
          email: this.state.email
        }
        //Clears the inputs and add dbRef to state, and assigns the firebase reference to the user id 
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          dbRef: firebase.database().ref(`/${this.state.user.uid}`)
        }, () => {
          //Create UserInfo node in firebvase and sets the value to userObj(name & email)
          this.state.dbRef.child('UserInfo').set(userObj);
        })
      })
    })
    .catch(function(error) {
      // Handle Errors here and displays error message -> TO FIX
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
  }

  handleSignInEmail = (e) => {
    e.preventDefault();
    //handles sign in of email users
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      //Toggles the signInPopup in state and the sign in popup appears
      this.toggleSignInPopUp();
    })
    .catch(function (error) {
      // Handle Errors here. -> TO FIX
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode === 'auth/invalid-email') {
        alert(errorMessage);
      }
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // Handle Google login -> See above
  googleSignIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider)
    .then(result => {
      this.setState({
        user: result.user,
        signInPopUp: false
      }, () => {
        
        const userObj = {
          name: this.state.user.displayName,
          email: this.state.user.email
        }
        this.setState({
          dbRef: firebase.database().ref(`/${this.state.user.uid}`)
        }, () => {
          this.state.dbRef.child('UserInfo').set(userObj);
        })
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
            displayName={this.state.displayName}
          />
          {/* If signInPopup is true then Popup appears */}
          {this.state.signInPopUp 
          ?
          <SignInPopUp
            handleSignInEmail={this.handleSignInEmail}
            toggleSignInPopUp={this.toggleSignInPopUp}
            googleSignIn={this.googleSignIn}
            handleInputChange={this.handleInputChange}
          />
          :
          null
          } 
          {/* If there is a user in state, redirect to registries, else go to home page */}
          {this.state.user
          ?
          <React.Fragment>
            <Redirect to="/registries" />
            <Route exact path="/registries" render={() => (
              <RegistryDashboard
                dbRef={this.state.dbRef}
                registries={this.state.registries} 
              />
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
                  handleInputChange={this.handleInputChange}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  password={this.state.password}
                />
              )} 
            />
          </React.Fragment>
          }
          {/* Route to registeries/{id} when a registy is clicked */}
          <Route exact path="/registries/:registry_id" render={() => (
            <Registry 
              registries={this.state.registries}
              dbRef={this.state.dbRef}
            />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
