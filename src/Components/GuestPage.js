import React, { Component } from 'react'; 
import firebase from '../firebase';

const regRef = firebase.database().ref('/All Registries')

class GuestPage extends Component {
    constructor() {
        super();
        this.state = {
            regInfo: {},
            ideas: {},
            cost: ""

        }
    }
    
    componentDidMount() {
        const registryId = this.props.match.params.registry_id //registryId now available in params
        regRef.on('value', (snapshot) => {
            this.setState({
                regInfo: snapshot.val()[registryId] || {}, //saved snapshot in regInfo 
            }, () => {
                this.setState({
                    ideas: this.state.regInfo.Ideas || {}
                })
            })
        })
        console.log(this.state.cost)
    }

    handleInputChange = e => {
        if (e.target.id === 'contributionAmount') {
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

    handleSubmit = e => {
        e.preventDefault();
        const cost = Object.entries(this.state.ideas).map(idea => {
            if (this.state.giftSelection === idea[1].ideaName) {
                return (
                    idea[1].cost = idea[1].cost - this.state.contributionAmount
                )
            } else {
                return (parseInt(idea[1].cost))
            }
        })
        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            giftSelection: this.state.giftSelection,
            contributionAmount: this.state.contributionAmount,
            updatedCost: cost
        })
    }

    render() {
        console.log(this.state.updatedCost)
        return (
            <div>
                <h1>{this.state.regInfo.name}</h1> 
                <p>{this.state.regInfo.date}</p>
                {/* able to print custom info on page */}

                <form className="contributionAmount" onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName">First name:</label>
                    <input id="firstName" type="text" onChange={this.handleInputChange} required/>

                    <label htmlFor="lastName">Last name:</label>
                    <input id="lastName" type="text" onChange={this.handleInputChange}/>

                    <label htmlFor="giftSelection">Select a gift:</label>
                    <select id="giftSelection" onChange={this.handleInputChange} required>
                        <option value="" selected disabled>Select gift</option>
                        {Object.entries(this.state.ideas).map(idea => {
                            return(
                                <option value={idea[1].ideaName}>{idea[1].ideaName}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="contributionAmount">Your gift amount:</label>
                    <input id="contributionAmount" type="text" onChange={this.handleInputChange} required/>

                    <input type="submit" value="Send Gift"/>
                </form>

                <div className="ideas">
                    {Object.entries(this.state.ideas).map(idea => {
                        return(
                            <div key={idea[0]} className="ideaContainer">
                                <h3 className="ideaName">{idea[1].ideaName}</h3>
                                <p className="description">{idea[1].description}</p>
                                <p className="cost">Total Cost: ${idea[1].cost}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GuestPage;