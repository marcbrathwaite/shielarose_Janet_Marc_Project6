import React, { Component } from 'react';


class GuestSearchForm extends Component {
    constructor() {
        super();
        this.state = {
           guestSearch: ""
        }
    }

    componentDidUpdate() {
        
    }

    

    handleSearchSubmit = e => {
        e.preventDefault();

    }

    handleSearchChange = () => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSearchSubmit}>
                    <label htmlFor="guestSearch">Search Registry</label>
                    <input value={} type="text" id="guestSearch" placeholder="(key)" onChange={this.handleSearchChange} />
                </form>
            </div>
        )
    }
}

export default GuestSearchForm;