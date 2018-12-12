import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from './icons';


//This component display each idea
const Ideas = ({
        handleClickIdea,
        ideaKey,
        ideaName,
        handleDeleteIdea,
        ideaCategory
    }) => {
    return(
            <div className="idea"> 
                <div className="ideaLink" onClick={() => handleClickIdea(ideaKey)}>
                    <div className="ideaContent">
                        <h3>{ideaName}</h3>
                        <i className={`${icon[ideaCategory]} ideaCategoryIcon`} aria-hidden title="idea category"></i>
                        { /* icon will be hidden because it's not important to the content */}
                    </div>
                </div>
                <div className="ideaDelete">
                    <FontAwesomeIcon icon={faTimes} aria-hidden title="Delete Idea" onClick={() => handleDeleteIdea(ideaKey)}/>
                    <span className="visuallyhidden">Delete Idea</span>
                </div>
            </div> 
    )
}

export default Ideas;