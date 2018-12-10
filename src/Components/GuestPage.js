import React, { Component } from 'react'; 
import firebase from '../firebase';

const regRef = firebase.database().ref('/All Registries')
const userRef = firebase.database().ref()

class GuestPage extends Component {
    constructor() {
        super();
        this.state = {
            regInfo: {},
            ideas: {},
            // totalCost: "",
            // balance: "",
            // contributions: 0,
            // contributionTotal: "",
        }
    }
    
    componentDidMount() {
        const registryId = this.props.match.params.registry_id //registryId now available in params
        regRef.on('value', (snapshot) => {
            if (snapshot.val() !== null) {
                this.setState({
                    regInfo: snapshot.val()[registryId] || {}, //saved snapshot in regInfo 
                }, () => {
                    this.setState({
                        ideas: this.state.regInfo.Ideas || {}
                    })
                })
            }
        })
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
        const updatedAmounts = Object.entries(this.state.ideas).filter(idea => {
            return (
                this.state.giftSelection === idea[1].ideaName
            )
        })
        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            giftSelection: this.state.giftSelection,
            contributionAmount: this.state.contributionAmount,
        }, () => {
            // create an object of the user inputs when they contribute
            const contributor = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                contributionAmount: this.state.contributionAmount,
            }

            // updating balance/contributions/contributors
            updatedAmounts[0][1].balance = parseFloat(updatedAmounts[0][1].balance) - parseFloat(this.state.contributionAmount);

            updatedAmounts[0][1].contributions = parseFloat(updatedAmounts[0][1].contributions) + parseFloat(this.state.contributionAmount);

            // push the balance and contribution updates to "All Registries" in firebase
            regRef.child(this.props.match.params.registry_id).child("Ideas").child(updatedAmounts[0][0]).set(updatedAmounts[0][1]);
                        
            regRef.child(this.props.match.params.registry_id).child("Ideas").child(updatedAmounts[0][0]).child("Contributors").push(contributor);
            // pull the userId that corresponds to this registry from the database
            regRef.child(this.props.match.params.registry_id).child("userId").once("value", (snapshot) => {
                this.userId = snapshot.val()
            })

            // push the updates made in "All Registries" for balance and contributions into the associated userId
            userRef.child(this.userId).child("Registries").child(this.props.match.params.registry_id).child("Ideas").child(updatedAmounts[0][0]).set(updatedAmounts[0][1]);

            userRef.child(this.userId).child("Registries").child(this.props.match.params.registry_id).child("Ideas").child(updatedAmounts[0][0]).child("Contributors").push(contributor)
            
            
        })
        console.log(updatedAmounts[0][1])
    }

    render() {
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
                                <p>Updated Balance: ${idea[1].balance}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GuestPage;