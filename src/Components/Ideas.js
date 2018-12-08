import React, { Component } from 'react';


class Ideas extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         regIdeas: {}
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.regObject !== prevProps.regObject) {
    //         this.setState({
    //             regIdeas: this.props.regObject
    //         })   
    //     }
    // }

    render() {
        return(
            <div>
                <button>{this.props.ideaName}</button>
                {/* <ul>
                    {Object.entries(this.state.regIdeas).map(idea => {
                        return (
                            <li key={idea[0]}>
                                <button>{idea[1].idea}</button>
                            </li>
                        )
                    })}
                </ul> */}

            </div>
        )
    }
}

export default Ideas;