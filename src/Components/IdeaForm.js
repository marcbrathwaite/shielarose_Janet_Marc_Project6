import React from 'react';

//This component displays the idea form
const IdeaForm = ({
   ideaName,
   handleInputChange,
   handleSubmit,
   cost,
   ideaCategory,
   description,
   setFormref
}) => {

   return (
      <div className="ideaForm">
         <form className="ideasForm outerWrapper" ref={setFormref} onSubmit={handleSubmit}>
            <label htmlFor="ideaName">What would you like?</label>
            <input value={ideaName} type="text" id="ideaName" onChange={handleInputChange} required />

            <label htmlFor="cost">How much is it going to cost?</label>
            <input value={cost} type="text" id="cost" onChange={handleInputChange} required />

            <label htmlFor="ideaCategory">Category</label>
            <select value={ideaCategory} name="ideaCategory" id="ideaCategory" onChange={handleInputChange}>
               <option value="wedding">Wedding</option>
               <option value="honeymoon">Honeymoon</option>
               <option value="travel">Travel</option>
               <option value="concert">Concert Tickets</option>
               <option value="sports">Sports Tickets</option>
               <option value="house">Household</option>
               <option value="rent">Rent/Mortgage</option>
               <option value="dependents">Kids/Pets</option>
               <option value="food">Food</option>
               <option value="wellbeing">Wellbeing</option>
               <option value="retirement">Retirement</option>
               <option value="debt">Debt</option>
               <option value="other">Other</option>
            </select>

            <label htmlFor="description">Description (optional)</label>
            <input value={description} type="text" id="description" onChange={handleInputChange} maxlength="200" />

            <input type="submit" value="Add Gift" />
         </form>
      </div>
   )
}

export default IdeaForm;