import React, { Component } from 'react';


class Ideas extends Component {
    render() {
        return(
            <div>
                <button value={this.props.ideaKey} onClick={this.props.handleClick}>{this.props.ideaName}</button>
            </div>
        )
    }
}

export default Ideas;