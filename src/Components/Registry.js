import React, { Component } from 'react';
// import firebase from './firebase';
import RegistryForm from './RegistryForm';

class Registry extends Component {
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
         p2LastName: this.state.partnerTwoLastName
      }
      this.props.dbRef.child('Registries').push(registry)
      
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
         partnerTwoLastName,
         registries
      } = this.state

      return (
        <div>
            {Object.entries(this.props.registries).map(registry => {
               return (
                  <div key={registry[0]} className="registry">
                     <h3 className="registryName">{registry[1].name}</h3>
                  </div>
               )
            })}
            <button className="createRegistry" onClick={this.toggleRegistryForm}>+</button>

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

export default Registry;