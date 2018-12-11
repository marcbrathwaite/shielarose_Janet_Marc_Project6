import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Ideas extends Component {
    render() {
        return(
            // <div>
            //     <button value={this.props.ideaKey} onClick={this.props.handleClickIdea}>{this.props.ideaName}</button>
            // </div>

            <div className="idea" style={{position: 'relative', width: '100%', height: '100%'}}> 
                <div style={{position: 'absolute', right: '0', top:'0', left: '0', bottom:'0', zIndex:'0', cursor:'pointer'}} onClick={() => this.props.handleClickIdea(this.props.ideaKey)}>
                    <p>{this.props.ideaName}</p>
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