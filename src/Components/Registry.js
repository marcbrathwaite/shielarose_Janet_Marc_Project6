import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Registry extends Component {
    constructor(){
        super();
        this.state = {
            regObject: {}
        }
    }

    componentDidMount () {
        this.setState({
            regObject: this.props.registries[this.props.match.params.registry_id]
        })
    }

    render () {
        return (
            <div>
                <header>
                    <h2>{this.state.regObject.name}</h2>   
                    <p>{this.state.regObject.p1FirstName} & {this.state.regObject.p2FirstName}</p>  
                    <p>{this.state.regObject.date}</p>
                </header>   
                <main>
                  <form className="ideasForm">
                     <label htmlFor="newGift">What would you like?</label>
                     <input type="text" id="newGift"/>

                    <label htmlFor="cost">How much is it going to cost?</label>
                    <input type="text" id="cost" />

                     <select name="ideaType" id="">
                        <option value="travel">Travel</option>
                        <option value="">Concert Tickets</option>
                        <option value="">Sports Ticket</option>
                        <option value="">Household</option>
                        <option value="">Rent/Mortgage</option>
                        <option value="">Kids/Pets</option>
                        <option value="">Honeymoon</option>
                        <option value="">Food</option>
                        <option value="">Wellbeing</option>
                        <option value="">Retirement</option>
                        <option value="">Debt</option>
                        <option value="">Wedding</option>
                     </select>

                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" />

                    <input type="submit" value="Add Gift" />
                  </form>   
                </main> 
            </div>    
        )
    }
}

export default withRouter(Registry);