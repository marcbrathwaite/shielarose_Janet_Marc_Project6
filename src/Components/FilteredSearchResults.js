import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FilteredSearchResults extends Component {
   render() {
      return (
         <div className="filteredResults">
            { this.props.filteredReg &&
               <ul>
                     { Object.values(this.props.filteredReg).map((entry) => {
                        // entry returns each array that matches the search query. [0] = key, [1] = object with info
                        return (
                           <Link to={`/guest/${entry[0]}`} key={entry[0]}> {/* now links to key */} 
                              <li value={entry[1].name}>{entry[1].p1FirstName} & {entry[1].p2FirstName}</li>
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