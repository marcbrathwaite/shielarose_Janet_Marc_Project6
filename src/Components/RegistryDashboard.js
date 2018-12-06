import React, { Component } from 'react';
import RegistryForm from './RegistryForm';
import { Link, Route } from 'react-router-dom';
import Registry from './Registry';

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
         partnerTwoLastName
      } = this.state

      return (
        <div>
            {Object.entries(this.props.registries).map(registry => {
               return (
                  
                  <Link to={`/registries/${registry[0]}`}>
                     <div key={registry[0]} className="registry">
                        <h3 className="registryName">{registry[1].name}</h3>
                     </div>
                  </Link>
      
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

export default RegistryDashboard;