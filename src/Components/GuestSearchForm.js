import React, { Component } from 'react';
import FilteredSearchResults from './FilteredSearchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class GuestSearchForm extends Component {
    render() {
        return (
            <div className="guestSearch outerWrapper">
                <form className="guestSearchForm" onSubmit={this.props.handleSearchSubmit}>
                    <label htmlFor="guestSearchBar">Search for a registry:</label>
                    <input
                        type="text" id="guestSearchBar"
                        placeholder="Name of registry"
                        className="guestSearchBar"
                        onChange={this.props.handleSearchChange}
                        autoComplete="off"
                    />
                    <Link to="/searchresults">
                        <button className="searchIcon" onClick={this.props.handleSearchSubmit}>
                            <FontAwesomeIcon icon={faSearch} aria-hidden title="Search Registries" />
                            <span className="visuallyhidden">Search Registries</span>
                        </button>
                    </Link>
                    <FilteredSearchResults 
                        filteredReg={this.props.filteredReg}
                    />
                </form>
            </div>
        )
    }
}

export default GuestSearchForm;