import React, { Component } from 'react';
import RegistryForm from './RegistryForm';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
         registryForm: false
      }
   }

   //Toggles registryForm boolean in state after clicking +
   toggleRegistryForm = () => {
      this.setState({
         registryForm: !this.state.registryForm
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
         userId: this.props.dbRef.key
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
         partnerTwoLastName: ''
      })
   }

   handleDeleteRegistry = (registryKey) => {
         confirmAlert({
            customUI: ({ onClose }) => {
               return (
                  <div className='custom-ui' style={{border:'1px solid black', padding: '20px'}}>
                     <p>Are you sure that you want to delete this registry</p>
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
        <div className="innerWrapper registryDashboard">
           {/* Renders the registries on the page */}
            {Object.entries(this.props.registries).map(registry => {
               return (

                  // Creates a linke with /registries/{uid}
                     <div className="registry" key={registry[0]} style={{position: 'relative', padding: '100px'}}>
                  <Link to={`/registries/${registry[0]}`}  style={{position: 'absolute', right: '0', top:'0', left: '0', bottom:'0', zIndex:'0'}}>

                        <h3 className="registryName">{registry[1].name}</h3>
                  </Link>
                        <div className="registryDelete" style={{position: 'absolute', right: '5px', top:'5px', zIndex:'10', cursor:'pointer'}}>
                        <FontAwesomeIcon icon={faTimes} aria-hidden title="Delete Registry" onClick={() => this.handleDeleteRegistry(registry[0])}/>
                        <span className="visuallyhidden">Delete Registry</span>
                        </div>
                     </div>
      
               )
            })}
            <button className="createRegistry" onClick={this.toggleRegistryForm}>+</button>
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
            />
            :
            null
            }
        </div>
      )
   }

}

export default RegistryDashboard;