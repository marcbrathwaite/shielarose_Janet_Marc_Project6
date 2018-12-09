import React, { Component } from 'react';
import firebase from '../firebase';
import FilteredSearchResults from './FilteredSearchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                <form className="guestSearchForm" onSubmit={(e) => this.handleSearchSubmit(e)}>
                    <label htmlFor="guestSearchBar">
                        <FontAwesomeIcon icon={faSearch} aria-hidden title="Search Registries"/>
                        <span className="visuallyhidden">Search Registries</span>
                    </label>
                    <input
                        type="text" id="guestSearchBar"
                        placeholder="Name of registry"
                        className="guestSearchBar"
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