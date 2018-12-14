import React from 'react';
import GuestSearchForm from './GuestSearchForm';

//This component contains the search Nav
const SearchNav = ({
      filteredReg,
      handleSearchChange,
      handleSearchSubmit,
      searchInput,
      resetSearchParams
   }) => {
      return (
         <div className="searchNav">
            { 
            <GuestSearchForm
               filteredReg={filteredReg}
               handleSearchChange={handleSearchChange}
               handleSearchSubmit={handleSearchSubmit}
               searchInput={searchInput}
               resetSearchParams={resetSearchParams}
            />  }       
         </div>
      )

}

export default SearchNav;