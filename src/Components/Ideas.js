import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Ideas extends Component {
    render() {
        return(
            // <div>
            //     <button value={this.props.ideaKey} onClick={this.props.handleClickIdea}>{this.props.ideaName}</button>
            // </div>

            <div className="idea outerWrapper"> 
                <div className="ideaLink" onClick={() => this.props.handleClickIdea(this.props.ideaKey)}>
                    <h3>{this.props.ideaName}</h3>
                </div>
                <div className="ideaDelete" style={{position: 'absolute', right: '5px', top:'5px', zIndex:'10', cursor:'pointer'}}>
                <FontAwesomeIcon icon={faTimes} aria-hidden title="Delete Idea" onClick={() => this.props.handleDeleteIdea(this.props.ideaKey)}/>
                <span className="visuallyhidden">Delete Idea</span>
                </div>
            </div>
            
        )
    }
}

export default Ideas;