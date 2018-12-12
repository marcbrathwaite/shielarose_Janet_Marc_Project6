import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchList extends Component {
    //If searchReg is empty, return all of the registries, else returned the searched registries
    displayRegistries = (registry) => {
        return (registry.map(entry => {
            return (
                <Link to={`/guest/${entry[0]}`} key={entry[0]} className="registryLink"> {/* now links to key */} 
                    <li value={entry[1].name}>
                    <h4>{entry[1].name}</h4>
                    <p>{entry[1].date}</p>
                    <p>
                        {entry[1].p1FirstName} {entry[1].p1LastName} & {entry[1].p2FirstName} {entry.p2LastName}
                    </p>        
                    </li>
                </Link>
            )
        })
        );
    }
    render() {
        return (
            <ul className="searchList innerWrapper">
                { this.props.finalInput.length === 0 
                    ?
                    this.displayRegistries(this.props.foundReg)
                    :
                    this.props.finalInput.length > 0 && this.props.searchReg.length > 0
                    ?
                    this.displayRegistries(this.props.searchReg)
                    :
                    <div className="noResults">
                        <li>Sorry, there are no results that match "{this.props.finalInput}"</li>
                        <svg x="0px" y="0px" viewBox="0 0 100 100"><path d="M50,20c16.569,0,30,13.431,30,30S66.569,80,50,80S20,66.569,20,50S33.431,20,50,20 M50,15  c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S69.299,15,50,15L50,15z" /><circle cx="62" cy="43.999" r="5" /><circle cx="38.002" cy="43.999" r="5" /><path d="M65.414,66.827c-0.588,0-1.178-0.206-1.653-0.626c-3.802-3.355-8.688-5.204-13.761-5.204s-9.959,1.849-13.761,5.204  c-1.035,0.914-2.615,0.814-3.528-0.22c-0.914-1.035-0.815-2.614,0.22-3.528C37.646,58.29,43.708,55.997,50,55.997  c6.292,0,12.354,2.293,17.069,6.456c1.035,0.914,1.134,2.493,0.22,3.528C66.795,66.541,66.106,66.827,65.414,66.827z" />
                        {/* Created by Daouna Jeong from the Noun Project */}  
                        </svg>         
                    </div>
                }
            </ul>
        )
    }
}

export default SearchList;



    /* { this.props.filteredReg.length > 0
                        ?    */

 /* :
                    <div>
                        <h2>All Registries</h2>
                        {Object.entries(this.props.foundReg).map(entry => {
                            console.log(entry)
                            return (
                                <Link to={`/guest/${entry[0]}`} key={entry[0]}>
                                    <li value={entry[1].name}>
                                        <h4>{entry[1].name}</h4>
                                        <p>{entry[1].date}</p>
                                        <p>
                                            {entry[1].p1FirstName} {entry[1].p1LastName} & {entry[1].p2FirstName} {entry[1].p2LastName}
                                        </p>
    
                                    </li>
                                </Link>
                            )
                        })
                        }
                    </div>
                } */

                // this.generateRegistries(this.props.searchReg, this.props.foundReg).map(entry => {
                //         console.log(entry);
                //         return (
                //             <Link to={`/guest/${entry[0]}`} key={entry[0]}> {/* now links to key */} 
                //                 <li value={entry[1].name}>
                //                 <h4>{entry[1].name}</h4>
                //                 <p>{entry[1].date}</p>
                //                 <p>
                //                 {entry[1].p1FirstName} {entry[1].p1LastName} & {entry[1].p2FirstName} {entry[1].p2LastName}
                //                 </p>
                                
                //                 </li>
                //             </Link>
                //         )
                //     })
                //     }
                //     {