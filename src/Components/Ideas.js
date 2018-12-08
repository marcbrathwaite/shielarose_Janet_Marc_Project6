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
            </div>
        )
    }
}

export default Ideas;