import React from 'react';

//This component displays the form to a add a registry
const RegistryForm = ({
        handleRegistrySubmit,
        setFormref,
        registryName,
        handleChange,
        p1FirstName,
        p1LastName,
        p2FirstName,
        p2LastName,
        date
    }) => {
    let today = new Date();
    let dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    return (
        <form className="registryForm" onSubmit={handleRegistrySubmit} ref={setFormref}>
            <label htmlFor="registryName">Name of Registry</label>
            <input type="text" id="registryName" value={registryName} placeholder="Ex. Rachel and Ross' Wedding Registry" onChange={handleChange} maxlength="50" required/>

            <p className="partnerName">Partner 1</p>
            <label className="visuallyhidden" htmlFor="partnerOneFirstName">First Name:</label>
            <input type="text" id="partnerOneFirstName" value={p1FirstName} placeholder="First Name" onChange={handleChange} required/>

            <label className="visuallyhidden" htmlFor="partnerOneLastName">LastName:</label>
            <input type="text" id="partnerOneLastName" value={p1LastName} placeholder="Last Name" onChange={handleChange} required/>

            <p className="partnerName">Partner 2</p>
            <label className="visuallyhidden" htmlFor="partnerTwoFirstName">First Name:</label>
            <input type="text" id="partnerTwoFirstName" value={p2FirstName} placeholder="First Name" onChange={handleChange} required/>

            <label className="visuallyhidden" htmlFor="partnerTwoLastName">Last Name:</label>
            <input type="text" id="partnerTwoLastName" value={p2LastName} placeholder="Last Name" onChange={handleChange} required/>

            <p className="weddingDate">Wedding Date</p>
            <label htmlFor="weddingDate" className="visuallyhidden">Wedding Date</label>
            <input type="date" min={today} id="date" value={date} onChange={handleChange} required/>

            <label className="visuallyhidden" htmlFor="submitRegistry">Last Name:</label>
            <input type="submit" id="submitRegistry" value="Create New Registry" />
        </form>

    )
}

export default RegistryForm;