import React, { Component } from 'react';

const RegistryForm = (props) => {
    let today = new Date();
    let dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return (
        <form onSubmit={props.handleRegistrySubmit}>
            <label htmlFor="registryName">Name of Registry</label>
            <input type="text" id="registryName" value={props.registryName} placeholder="Ex. Rachel and Ross' Wedding Registry" onChange={props.handleChange}/>

            <p className="partnerName">Partner 1</p>
            <label className="visuallyhidden" htmlFor="partnerOneFirstName">First Name:</label>
            <input type="text" id="partnerOneFirstName" value={props.p1FirstName} placeholder="First Name" onChange={props.handleChange}/>

            <label className="visuallyhidden" htmlFor="partnerOneLastName">LastName:</label>
            <input type="text" id="partnerOneLastName" value={props.p1LastName} placeholder="Last Name" onChange={props.handleChange} />

            <p className="partnerName">Partner 2</p>
            <label className="visuallyhidden" htmlFor="partnerTwoFirstName">First Name:</label>
            <input type="text" id="partnerTwoFirstName" value={props.p2FirstName} placeholder="First Name" onChange={props.handleChange} />

            <label className="visuallyhidden" htmlFor="partnerTwoLastName">Last Name:</label>
            <input type="text" id="partnerTwoLastName" value={props.p2LastName} placeholder="Last Name" onChange={props.handleChange} />

            <label htmlFor="weddingDate">Wedding Date</label>
            <input type="date" min={today} id="date" value={props.date} onChange={props.handleChange} />

            <label className="visuallyhidden" htmlFor="submitRegistry">Last Name:</label>
            <input type="submit" id="submitRegistry" value="Create New Registry" />
        </form>

    )
}

export default RegistryForm;