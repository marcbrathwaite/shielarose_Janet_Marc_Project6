import React, { Component } from 'react';
import RegistryForm from './RegistryForm';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


// const registryRef = firebase.database().ref()
const dbRef = firebase.database().ref();

class RegistryDashboard extends Component {
   constructor() {
      super()
      this.state = {
         registryName: '',
         date: '',
         partnerOneFirstName: '',
         partnerOneLastName: '',
         partnerTwoFirstName: '',
         partnerTwoLastName: '',
         registryForm: false,
         myRef: null
      }
   }

   scrollRef = () => {
      if (this.state.myRef) {
         window.scrollTo({
            top: this.state.myRef.offsetTop,
            behavior: "smooth" // Optional, adds animation
         })
      }
   }

   //Toggles registryForm boolean in state after clicking +
   toggleRegistryForm = () => {
      this.setState({
         registryForm: !this.state.registryForm
      })
   }

   setFormref = element => {
      this.setState({
         myRef: element
      }, () => {
            this.scrollRef();
         
      })
   }


   handleChange = e => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   handleRegistrySubmit = e => {
      e.preventDefault()
      const registry = {
         name: this.state.registryName,
         date: this.state.date,
         p1FirstName: this.state.partnerOneFirstName,
         p1LastName: this.state.partnerOneLastName,
         p2FirstName: this.state.partnerTwoFirstName,
         p2LastName: this.state.partnerTwoLastName,
         userId: this.props.dbRef.key,
         
      }
      
      //Toggle form on submit
      this.toggleRegistryForm();

      //Get the Registry id from the user section of the database
      const registryKey = this.props.dbRef.child('Registries').push(registry).key

      //Add a registry to the registries node in firebase, setting the key to the same one in the user section of the database
      dbRef.child('All Registries').child(registryKey).set(registry);
      
      this.setState({
         registryName: '',
         date: '',
         partnerOneFirstName: '',
         partnerOneLastName: '',
         partnerTwoFirstName: '',
         partnerTwoLastName: '',
      })
   }

   handleDeleteRegistry = (registryKey) => {
         confirmAlert({
            customUI: ({ onClose }) => {
               return (
                  <div className="deleteAlert">
                     <p>Are you sure that you want to delete this registry?</p>
                     <button onClick={onClose}>No</button>
                     <button onClick={() => {
                        //Delete Registry from user node of firebase
                        this.props.dbRef.child('Registries').child(registryKey).remove();
                        //Delete Registry from Registries node of database
                        dbRef.child('All Registries').child(registryKey).remove();
                        onClose();
                     }}>Yes</button>
                  </div>
               )
            }
         })
   }

   render() {
      const { 
         registryName,
         date,
         partnerOneFirstName,
         partnerOneLastName,
         partnerTwoFirstName,
         partnerTwoLastName
      } = this.state

      return (
        <div className="registryDashboard">
           <div className="innerWrapper">
               <h2>Your Registries</h2>
              {/* Renders the registries on the page */}
               {Object.entries(this.props.registries).map(registry => {
                  return (
                     // Creates a link with /registries/{uid}
                     <div className="registry" key={registry[0]}>
                        <Link to={`/registries/${registry[0]}`} className="registryLink">
                           <h3 className="registryName">{registry[1].name}</h3>
                        </Link>
                        <div className="registryDelete">
                           <FontAwesomeIcon icon={faTimes} aria-hidden title="Delete Registry" onClick={() => this.handleDeleteRegistry(registry[0])}/>
                           <span className="visuallyhidden">Delete Registry</span>
                        </div>
                     </div>
         
                  )
               })}
               {this.state.registryForm
               ?
               <button className="registryButton closeRegistry" onClick={this.toggleRegistryForm}>
                  <FontAwesomeIcon icon={faTimes} className="registryIcon" aria-hidden title="minimize registry form"/>
                  <span className="visuallyhidden">Minimize registry form</span>
               </button>
               :
               <button className="registryButton createRegistry" onClick={this.toggleRegistryForm}>
                  <FontAwesomeIcon icon={faTimes} className="registryIcon rotatedIcon" aria-hidden title="create new registry"/>
                  <span className="visuallyhidden">Create new registry</span>
               </button>
               }
               
               {/* Registry form appears if this.state.registryForm is true */}
               { this.state.registryForm 
               ?
               <RegistryForm
                  handleRegistrySubmit={this.handleRegistrySubmit}
                  handleChange={this.handleChange}
                  registryName={registryName}
                  date={date}
                  p1FirstName={partnerOneFirstName}
                  p1LastName={partnerOneLastName}
                  p2FirstName={partnerTwoFirstName}
                  p2LastName={partnerTwoLastName}
                  setFormref={this.setFormref}
               />
               :
               null
               }
           </div>
        </div>
      )
   }

}

export default RegistryDashboard;