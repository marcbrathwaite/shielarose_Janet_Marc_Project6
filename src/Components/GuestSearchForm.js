import React, { Component } from 'react';
import firebase from '../firebase';
import FilteredSearchResults from './FilteredSearchResults';

// const allRegRef = firebase.database().ref('/All Registries')
const regRef = firebase.database().ref('/All Registries');

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
        regRef.on('value', (snapshot) => {
            this.setState({ 
                foundReg: snapshot.val() 
            });
        });
    }


    handleSearchSubmit = e => {
        e.preventDefault()
    }



    handleSearchChange = value => {
        const registriesArray = Object.entries(this.state.foundReg); // changed this to object.entries so we still have access to keys --> returns an array of arrays with all the keys and objects
        // const registriesArray = Object.values(this.state.foundReg);
        const re = new RegExp(value, 'ig');
        const filteredRegistries = registriesArray.filter((reg) => re.test(reg[1].name)); // changed it to reg[1].name to filter into the object inside each array 
        this.setState({ 
            filteredReg: filteredRegistries 
        });
    }

    render() {
        return (
            <div className="guestSearch">
                <form onSubmit={(e) => this.handleSearchSubmit(e)}>
                    <label htmlFor="guestSearch">Search Registry</label>
                    <input
                        type="text" id="guestSearch"
                        placeholder="(key)"
                        onChange={(e) => this.handleSearchChange(e.target.value)}
                    />

                    <input type="submit" value="Find" />

                    <FilteredSearchResults 
                        filteredReg={this.state.filteredReg}
                    />
                </form>
            </div>
        )
    }
}

export default GuestSearchForm;