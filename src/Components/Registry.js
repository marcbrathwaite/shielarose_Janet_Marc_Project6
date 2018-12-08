import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Ideas from './Ideas';

class Registry extends Component {
    constructor(){
        super();
        this.state = {
            regObject: {},
            ideaName:'',
            ideaCategory: 'travel',
            cost: '',
            description: '',
            regObjectAvailable: false,
            ideas: {},
        }
    }

    componentDidMount () {
        // After the registries object is passed as props, we use the registry_id (from the link url), to get the correct registry object
        const registryId = this.props.match.params.registry_id
        this.setState({
            regObject: this.props.registries[registryId]
        }, () => {
            this.setState({
               regObjectAvailable: true,
               dbRef: this.props.dbRef
            }, () => {
               this.state.dbRef.child(`Registries/${registryId}`).child("Ideas").on("value", (snapshot) => {
                  this.setState({
                     ideas: snapshot.val() || {}
                  })
               })
            })
        })
        
    }

    handleInputChange = (e) => {
        if (e.target.id === 'cost') {
            //User would only be allowed to enter valid dollar amounts 
            if (/^([0-9]+)([.]{0,1})([0-9]){0,2}$|^()$/g.test(e.target.value)) {
                this.setState({
                    [e.target.id]: e.target.value
                })
            }
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }  
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const ideaObj = {
            ideaName: this.state.ideaName,
            ideaCategory: this.state.ideaCategory,
            cost: this.state.cost,
            description: this.state.description,
            contributions: '',
            contributors: {}
      }
      //Add a registry to the Registries node in firebase
      this.props.dbRef.child(`Registries/${this.props.match.params.registry_id}`).child('Ideas').push(ideaObj) 
      
      this.setState({
         ideaName: '',
         ideaCategory: 'travel',
         cost: '',
         description: ''
      })

    }

    render () {
        console.log(this.state.regObject)
        return (
            <div>
                <header>
                    <h2>{this.state.regObject.name}</h2>   
                    <p>{this.state.regObject.p1FirstName} & {this.state.regObject.p2FirstName}</p>  
                    <p>{this.state.regObject.date}</p>
                </header>   
                <main>
                  <form className="ideasForm" onSubmit={this.handleSubmit}>
                     <label htmlFor="ideaName">What would you like?</label>
                     <input value={this.state.ideaName} type="text" id="ideaName" onChange={this.handleInputChange}/>

                    <label htmlFor="cost">How much is it going to cost?</label>
                    <input value={this.state.cost} type="text" id="cost" onChange={this.handleInputChange} />

                    <label htmlFor="ideaCategory">Category</label>
                     <select value={this.state.ideaCategory} name="ideaCategory" id="ideaCategory" onChange={this.handleInputChange}>
                        <option value="travel">Travel</option>
                        <option value="concert">Concert Tickets</option>
                        <option value="sports">Sports Ticket</option>
                        <option value="house">Household</option>
                        <option value="rent">Rent/Mortgage</option>
                        <option value="dependents">Kids/Pets</option>
                        <option value="honeymoon">Honeymoon</option>
                        <option value="food">Food</option>
                        <option value="wellbeing">Wellbeing</option>
                        <option value="retirement">Retirement</option>
                        <option value="debt">Debt</option>
                        <option value="wedding">Wedding</option>
                     </select>

                    <label htmlFor="description">Description</label>
                    <input value={this.state.description} type="text" id="description" onChange={this.handleInputChange}/>

                    <input type="submit" value="Add Gift" />
                  </form>   
                </main>

                <ul>

                  { this.state.regObjectAvailable
                     ?
                     Object.entries(this.state.ideas).map(idea => {
                     return (
                        <li key={idea[0]}>
                              <Ideas 
                                 ideaName={idea[1].ideaName}
                              />
                        </li>
                     )
                  })
                  :
                  null
                  }
                </ul>
            </div>    
        )
    }
}

export default withRouter(Registry);