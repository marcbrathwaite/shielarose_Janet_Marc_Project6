import React, { Component } from 'react';

const RegistryForm = () => {
    let today = new Date();
    let dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    console.log(today);
    return (
        <form>
            <label htmlFor="registryName">Name of Registry</label>
            <input type="text" id="registryName" placeholder="Ex. Rachel and Ross' Wedding Registry"/>

            <p className="partnerName">Partner 1</p>
            <label className="visuallyhidden" htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" placeholder="First Name"/>

            <label className="visuallyhidden" htmlFor="lastName">LastName:</label>
            <input type="text" id="lastName" placeholder="Last Name" />

            <p className="partnerName">Partner 2</p>
            <label className="visuallyhidden" htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" placeholder="First Name" />

            <label className="visuallyhidden" htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" placeholder="Last Name" />

            <label htmlFor="weddingDate">Wedding Date</label>
            <input type="date" min={today} />
        </form>

    )
}

export default RegistryForm;