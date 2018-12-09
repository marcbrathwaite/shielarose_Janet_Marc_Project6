import React, { Component } from 'react';
import firebase from '../firebase';
import FilteredSearchResults from './FilteredSearchResults';

const allRegRef = firebase.database().ref('/All Registries');

class GuestSearchForm extends Component {
    constructor() {
        super();
        this.state = {
           guestSearch: "",
           foundReg: {},
           filteredReg: {},
        }
    }

    componentDidMount = () => {
        allRegRef.on('value', (snapshot) => {
            console.log("snapshot", snapshot.val());
            this.setState({ 
                foundReg: snapshot.val() 
            });
        });
    }


    handleSearchSubmit = e => {
        e.preventDefault()
    }



    handleSearchChange = value => {
        const registriesArray = Object.values(this.state.foundReg);
        const re = new RegExp(value, 'ig');
        const filteredRegistries = registriesArray.filter((reg) => re.test(reg.name));
        console.log("filtered", filteredRegistries);
        this.setState({ 
            filteredReg: filteredRegistries 
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSearchSubmit(e)}>
                    <label htmlFor="guestSearch">Search Registry</label>
                    <input
                        type="text" id="guestSearch"
                        placeholder="(registry name)"
                        onChange={(e) => this.handleSearchChange(e.target.value)}
                    />

                    <input type="submit" value="Find" />

                    <FilteredSearchResults 
                        filteredReg={this.state.filteredReg}
                    />

                    {/* { this.state.filteredReg &&
                        <select>
                            { Object.values(this.state.filteredReg).map((entry, i) => (
                                <option value={entry.name} key={`${entry.name} ${i}`}>{entry.p1FirstName} {entry.p2FirstName}</option>
                            ))}
                        </select>
                    } */}
                </form>
            </div>
        )
    }
}

export default GuestSearchForm;