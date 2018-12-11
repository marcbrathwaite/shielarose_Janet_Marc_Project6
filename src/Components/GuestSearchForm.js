import React, { Component } from 'react';
import FilteredSearchResults from './FilteredSearchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';



// const allRegRef = firebase.database().ref('/All Registries')
// const regRef = firebase.database().ref('/All Registries');

class GuestSearchForm extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //        guestSearch: "",
    //        foundReg: {},
    //        filteredReg: {},
    //     }
    // }

    // componentDidMount = () => {
    //     regRef.on('value', (snapshot) => {
    //         this.setState({ 
    //             foundReg: snapshot.val() 
    //         });
    //     });
    // }


    // handleSearchSubmit = e => {
    //     e.preventDefault();
    // }

    // handleSearchChange = e => {
    //     const value = e.target.value;
    //     const registriesArray = Object.entries(this.state.foundReg); // changed this to object.entries so we still have access to keys --> returns an array of arrays with all the keys and objects
    //     const re = new RegExp(`^${value}`, 'ig');
    //     const filteredRegistries = !value ? [] : registriesArray.filter((reg) => re.test(reg[1].name) || re.test(reg[1].p1FirstName) || re.test(reg[1].p2FirstName));
    //     // changed it to reg[1].name to filter into the object inside each array 
    //     this.setState({ 
    //         filteredReg: filteredRegistries 
    //     });
    // }

    render() {
        return (
            <div className="guestSearch">
                <form className="guestSearchForm" onSubmit={(e) => this.props.handleSearchSubmit(e)}>
                    <label htmlFor="guestSearchBar">
                        <FontAwesomeIcon icon={faSearch} aria-hidden title="Search Registries"/>
                        <span className="visuallyhidden">Search Registries</span>
                    </label>
                    <input
                        type="text" id="guestSearchBar"
                        placeholder="Name of registry"
                        className="guestSearchBar"
                        onChange={this.props.handleSearchChange}
                        autocomplete="off"
                    />
                    <FilteredSearchResults 
                        filteredReg={this.props.filteredReg}
                    />
                    <Link to="/searchresults">
                    <input className="guestSearchButton" type="submit" value="Search Registry"/>
                    </Link>
                </form>
            </div>
        )
    }
}

export default GuestSearchForm;