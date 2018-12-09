import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FilteredSearchResults extends Component {
   render() {
      return (
         <div className="filteredResults">
            { this.props.filteredReg &&
               <ul>
                     { Object.values(this.props.filteredReg).map((entry, i) => {
                        return (
                           <Link to={`/${entry.p1FirstName}-${entry.p2FirstName}-${entry.date}`}>
                              <li value={entry.name} key={`${entry.name} ${i}`}>{entry.p1FirstName} & {entry.p2FirstName}</li>
                           </Link>
                        )
                     })}
               </ul>
            }
         </div>
      )
   }
}

export default FilteredSearchResults; 