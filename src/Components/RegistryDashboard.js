import React, { Component } from 'react';
import RegistryForm from './RegistryForm';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


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
            behavior: "smooth"
         })
      } else {
         window.scrollTo({
            top: -50,
            behavior: "smooth"
         })
      }
   }

   //Toggles registryForm boolean in state after clicking +
   toggleRegistryForm = () => {
      this.setState({
         registryForm: !this.state.registryForm
      })
   }
   //Create ref to the registry form
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
           {

              Object.entries(this.props.registries).length > 0
              ?
              <React.Fragment>
              <h2>Your Registries</h2>
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
               </React.Fragment>
               :
               this.props.noRegistries
               ?
               <div class="noRegistries">
                  <h3>You currently have no registries</h3>
                  <svg x="0px" y="0px" viewBox="0 0 100 100"><path d="M50,20c16.569,0,30,13.431,30,30S66.569,80,50,80S20,66.569,20,50S33.431,20,50,20 M50,15  c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S69.299,15,50,15L50,15z" /><circle cx="62" cy="43.999" r="5" /><circle cx="38.002" cy="43.999" r="5" /><path d="M65.414,66.827c-0.588,0-1.178-0.206-1.653-0.626c-3.802-3.355-8.688-5.204-13.761-5.204s-9.959,1.849-13.761,5.204  c-1.035,0.914-2.615,0.814-3.528-0.22c-0.914-1.035-0.815-2.614,0.22-3.528C37.646,58.29,43.708,55.997,50,55.997  c6.292,0,12.354,2.293,17.069,6.456c1.035,0.914,1.134,2.493,0.22,3.528C66.795,66.541,66.106,66.827,65.414,66.827z" />
                  {/* Created by Daouna Jeong from the Noun Project */}
                  </svg>         
               </div>
               :
               null
               
           }
               
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