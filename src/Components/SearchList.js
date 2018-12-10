import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.filteredReg.map(entry => {
                        console.log(entry);
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
                }
            </ul>
        )
    }
}

export default SearchList;