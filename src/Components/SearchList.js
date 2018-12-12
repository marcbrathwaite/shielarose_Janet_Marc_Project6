import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchList extends Component {
    //If searchReg is empty, return all of the registries, else returned the searched registries
    displayRegistries = (registry) => {
        return (registry.map(entry => {
            return (
                <Link to={`/guest/${entry[0]}`} key={entry[0]}> {/* now links to key */} 
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
                    <li>No results for {this.props.finalInput}</li>
                              
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