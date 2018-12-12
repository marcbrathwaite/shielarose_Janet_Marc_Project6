import React from 'react';
import { Link } from 'react-router-dom';

//This component displays the registry search results
const SearchList = ({
        finalInput,
        foundReg,
        searchReg
    }) => {
    //If searchReg is empty, return all of the registries, else returned the searched registries
    const displayRegistries = (registry) => {
        return (registry.map(entry => {
                    return (
                        <Link to={`/guest/${entry[0]}`} key={entry[0]}> {/* now links to key */} 
                            <li value={entry[1].name}>
                                <h4>{entry[1].name}</h4>
                                <p>{entry[1].date}</p>
                                <p>
                                {entry[1].p1FirstName} {entry[1].p1LastName} & {entry.p2FirstName}        {entry[1].p2LastName}
                                </p>   
                            </li>
                        </Link>
                    )
                })
                );
    }
    return (
        <ul className="searchList innerWrapper">    
            { finalInput.length === 0 
            ?
            this.displayRegistries(foundReg)
            :
                finalInput.length > 0 && searchReg.length > 0
                ?
                displayRegistries(searchReg)
                :
                <li className="noResults">No results for {finalInput}</li>
                              
            }
        </ul>
    )
    
}

export default SearchList;