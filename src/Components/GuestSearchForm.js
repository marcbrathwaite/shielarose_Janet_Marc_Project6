import React, { Component } from 'react';
import FilteredSearchResults from './FilteredSearchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class GuestSearchForm extends Component {
    render() {
        return (
            <div className="guestSearch outerWrapper">
                <form className="guestSearchForm" onSubmit={(e) => this.props.handleSearchSubmit(e)}>
                    <label htmlFor="guestSearchBar">Search for a registry:</label>
                    <input
                        type="text" id="guestSearchBar"
                        placeholder="Name of registry"
                        className="guestSearchBar"
                        onChange={this.props.handleSearchChange}
                        autoComplete="off"
                        required
                    />
                    <FilteredSearchResults 
                        filteredReg={this.props.filteredReg}
                    />
                    <Link to="/searchresults">
                        <FontAwesomeIcon icon={faSearch} aria-hidden title="Search Registries" />
                        <span className="visuallyhidden">Search Registries</span>
                    </Link>
                </form>
            </div>
        )
    }
}

export default GuestSearchForm;