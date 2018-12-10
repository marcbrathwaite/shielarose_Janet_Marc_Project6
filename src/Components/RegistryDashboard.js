import React, { Component } from 'react';
import RegistryForm from './RegistryForm';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

const registryRef = firebase.database().ref()

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

      //Add a registry to the Registries node in firebase
      const registryKey = this.props.dbRef.child('Registries').push(registry).key

      registryRef.child('All Registries').child(registryKey).set(registry);
      
      this.setState({
         registryName: '',
         date: '',
         partnerOneFirstName: '',
         partnerOneLastName: '',
         partnerTwoFirstName: '',
         partnerTwoLastName: ''
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
                  // Creates a link with /registries/{uid}
                  <Link to={`/registries/${registry[0]}`} key={registry[0]}>
                     <div className="registry">
                        <h3 className="registryName">{registry[1].name}</h3>
                     </div>
                  </Link>
      
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